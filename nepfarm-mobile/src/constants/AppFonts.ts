import {StyleSheet} from 'react-native';

enum TempFonts {
  QuicksandRegular = 'Quicksand-Regular',
  QuicksandSemiBold = 'Quicksand-SemiBold',
  QuicksandBold = 'Quicksand-Bold',
  QuicksandMedium = 'Quicksand-Medium',
  QuicksandLight = 'Quicksand-Light',
}

const AppFonts = StyleSheet.create({
  BodySmallRegular: {
    fontFamily: TempFonts.QuicksandMedium,
    fontSize: 12,
  },

  BodySmallBold: {
    fontFamily: TempFonts.QuicksandBold,
    fontSize: 12,
  },

  BodyBaseRegular: {
    fontFamily: TempFonts.QuicksandMedium,
    fontSize: 14,
  },

  BodyBaseBold: {
    fontFamily: TempFonts.QuicksandBold,
    fontSize: 14,
  },

  BodyLargeRegular: {
    fontFamily: TempFonts.QuicksandMedium,
    fontSize: 16,
  },

  BodyLargeBold: {
    fontFamily: TempFonts.QuicksandBold,
    fontSize: 16,
  },

  H6Regular: {
    fontFamily: TempFonts.QuicksandRegular,
    fontSize: 20,
  },

  H6Bold: {
    fontFamily: TempFonts.QuicksandSemiBold,
    fontSize: 20,
  },

  H5Regular: {
    fontFamily: TempFonts.QuicksandRegular,
    fontSize: 24,
  },

  H5Bold: {
    fontFamily: TempFonts.QuicksandSemiBold,
    fontSize: 24,
  },

  H4Regular: {
    fontFamily: TempFonts.QuicksandRegular,
    fontSize: 28,
  },

  H4Bold: {
    fontFamily: TempFonts.QuicksandSemiBold,
    fontSize: 28,
  },

  H3Regular: {
    fontFamily: TempFonts.QuicksandRegular,
    fontSize: 32,
  },

  H3Bold: {
    fontFamily: TempFonts.QuicksandSemiBold,
    fontSize: 32,
  },

  H2Regular: {
    fontFamily: TempFonts.QuicksandRegular,
    fontSize: 36,
  },

  H2Bold: {
    fontFamily: TempFonts.QuicksandSemiBold,
    fontSize: 36,
  },

  H1Regular: {
    fontFamily: TempFonts.QuicksandRegular,
    fontSize: 40,
  },

  H1Bold: {
    fontFamily: TempFonts.QuicksandSemiBold,
    fontSize: 40,
  },
});

export default AppFonts;
