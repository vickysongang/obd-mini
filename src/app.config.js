export default {
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#BA2738",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
        {
            iconPath: "images/ic_home.png",
            selectedIconPath: "images/ic_home_red.png",
            pagePath: "pages/index/index",
            text: "车辆"
        },
        {
            iconPath: "images/ic_meal.png",
            selectedIconPath: "images/ic_meal_red.png",
            pagePath: "pages/index/index",
            text: "位置"
        },
        {
            iconPath: "images/ic_mine.png",
            selectedIconPath: "images/ic_mine_red.png",
            pagePath: "pages/user/index",
            text: "我的"
        }
    ]
  }
}
