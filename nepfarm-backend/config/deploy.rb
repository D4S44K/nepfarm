# config valid for current version and patch releases of Capistrano
lock "~> 3.17.3"

set :application, "nepfarm-backend"
set :repo_url, "git@git.gurzu.net:nep-farm/nepfarm-backend.git"

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/opt/www/nepfarm"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, "config/database.yml", 'config/master.key'

# Default value for linked_dirs is []
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "tmp/webpacker", "public/system", "vendor", "storage"

# Default value for default_env is {}
set :default_env, { path: "/opt/ruby/bin:$PATH" }

set :rvm_type, :user

# Define a custom task to add the platform to the lockfile
task :add_platform_to_lockfile do
    on roles(:all) do
      within release_path do
        execute :bundle, 'lock --add-platform x86_64-linux'
      end
    end
  end
  
  # Run the custom task before bundle install
  before 'deploy:updating', 'add_platform_to_lockfile'

  # Number of workers and threads
set :puma_workers, 2
set :puma_threads, [4, 4]
# Bind to a specific address and port
set :puma_bind, "tcp://192.168.8.98:3000"
  
desc "Start the app server"
task :start_app_server do
  on roles(:app) do
    within release_path do
      execute :bundle, "exec puma -e production -C config/puma.rb"
    end
  end
end

# Run the task after deployment
after :deploy, :start_app_server


# set :default_shell, "/bin/bash -l"

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

# Skip migration if files in db/migrate were not modified
# Defaults to false
set :conditionally_migrate, true

before 'deploy:starting', 'config_files:upload'

# set this to false after deploying for the first time 
set :initial, true

# run only if app is being deployed for the very first time, should update "set :initial, true" above to run this
before 'deploy:migrate', 'database:create' if fetch(:initial)

after 'deploy:publishing', 'application:reload'