export default {
    SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',               // 添加当前登录的账号信息（登陆操作）
    REMOVE_ACCOUNT_INFO: 'REMOVE_ACCOUNT_INFO',         // 删除当前登录的账号信息（退出登陆操作）

    SET_PERMISSION_DATA: 'SET_PERMISSION_DATA',         // 添加权限数据
    SEARCH_PERMISSION_DATA: 'SEARCH_PERMISSION_DATA',   // 搜索权限数据
    CLEAR_SEARCH_PERMISSION: 'CLEAR_SEARCH_PERMISSION', // 清除权限检索信息

    SET_ROLE_PERMISSION_DATA: 'SET_ROLE_PERMISSION_DATA',           // 添加角色权限信息的数据
    SEARCH_ROLE_PERMISSION_DATA: 'SEARCH_ROLE_PERMISSION_DATA',     // 搜索角色权限信息
    CLEAR_SEARCH_ROLE_PERMISSION: 'CLEAR_SEARCH_ROLE_PERMISSION',   // 清除角色权限信息

    SET_ACCOUNT_DATA: 'SET_ACCOUNT_DATA',                       // 设置全部账户信息（账户管理页面）
    SEARCH_ACCOUNT_ROLE: 'SEARCH_ACCOUNT_ROLE',                 // 搜索账户信息
    CLEAR_SEARCH_ACCOUNT_ROLE: 'CLEAR_SEARCH_ACCOUNT_ROLE',     // 清楚搜索痕迹

    SET_CAROUSEL_DATA: 'SET_CAROUSEL_DATA',                 // 添加某一页的轮播图信息
    SET_ONLINE_CAROUSEL_DATA: 'SET_ONLINE_CAROUSEL_DATA',   // 添加已经上线的轮播图信息
    SEARCH_CAROUSEL: 'SEARCH_CAROUSEL',                     // 搜索轮播图
    CLEAR_SEARCH_CAROUSEL: 'CLEAR_SEARCH_CAROUSEL'          // 清除轮播图搜索记录
}