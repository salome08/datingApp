import { StyleSheet, Dimensions } from 'react-native';

export const PRIMARY_COLOR = '#c70039';
const SECONDARY_COLOR = '#5636B8';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

const ONLINE_STATUS = '#46A575';
const OFFLINE_STATUS = '#D04949';

export const STAR_ACTIONS = '#FFA200';
const LIKE_ACTIONS = '#B644B2';
const DISLIKE_ACTIONS = '#363636';
const FLASH_ACTIONS = '#5028D7';

const ICON_FONT = 'Arial';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  navigationContainer: {
    height: 8,
    backgroundColor: 'red',
  },
  test: {
    backgroundColor: ONLINE_STATUS,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '4%',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesCardItem: {
    marginTop: -35,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  descriptionCardItem: {
    color: GRAY,
    textAlign: 'center',
  },
  status: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: GRAY,
    fontSize: 12,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: ONLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: OFFLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  actionsCardItemProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    bottom: '6%',
    shadowOpacity: 0.2,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButtonClose: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  star: {
    fontFamily: ICON_FONT,
    color: STAR_ACTIONS,
  },
  like: {
    fontSize: 25,
    fontFamily: ICON_FONT,
    color: LIKE_ACTIONS,
  },
  dislike: {
    fontSize: 25,
    fontFamily: ICON_FONT,
    color: DISLIKE_ACTIONS,
  },
  flash: {
    fontFamily: ICON_FONT,
    color: FLASH_ACTIONS,
  },

  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  cityText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13,
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 70,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  filtersText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13,
  },

  // COMPONENT - MESSAGE
  containerMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },

  filtersTitle: {
    color: PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  filtersSubtitle: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  simpleCardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '2%',
    paddingHorizontal: '4%',
    // backgroundColor: '#32e5',
  },
  simpleCardSliderItem: {
    flex: 1,
    marginVertical: '2%',
    paddingHorizontal: '4%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  simpleCardInputItem: {
    height: 80,
    backgroundColor: '#eee',
    paddingTop: 10,
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: '4%',
  },
  simpleCardAshtagsItem: {
    flex: 6,
    // backgroundColor: 'lightgray',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    margin: 10,
    // borderRadius: 5,
    // paddingHorizontal: '4%',
  },
  dragItem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesProfileItem: {
    width: 131,
    marginTop: -15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  matchesTextProfileItem: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    fontSize: 15,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 13,
  },
  info: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconProfile: {
    fontFamily: ICON_FONT,
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: GRAY,
    fontSize: 13,
  },

  // CONTAINER - GENERAL
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  topContainer: {
    // marginTop: 34,
    height: '10%',
  },
  top: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topProfile: {
    marginTop: 34,
    flexDirection: 'row',
    height: '10%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },
  title: {
    paddingTop: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  icon: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: DARK_GRAY,
    paddingRight: 10,
  },

  // CONTAINER - HOME
  containerHome: {
    flex: 1,
    // paddingTop: '20%',
    // height: '100%',
    justifyContent: 'center',
  },
  cardStack: {
    borderRadius: 8,
    alignItems: 'center',
    // height: '100%',
    flex: 1,
  },

  cardr: {
    height: '100%',
  },
  // CONTAINER - MATCHES
  containerMatches: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },

  // CONTAINER - MESSAGES
  containerMessages: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },

  // CONTAINER - PROFILE
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: DIMENSION_WIDTH,
    height: 450,
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingLeft: 20,
    marginTop: -20,
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  iconButton: { fontFamily: ICON_FONT, fontSize: 20, color: WHITE },
  textButton: {
    fontFamily: ICON_FONT,
    fontSize: 15,
    color: WHITE,
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 20,
  },

  // MENU
  tabButton: {
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabButtonText: {
    textTransform: 'uppercase',
  },
  iconMenu: {
    fontFamily: ICON_FONT,
    height: 20,
    paddingBottom: 7,
  },
});
