/*
 * @Descripttion: 工具函数
 * @Author: DXY
 * @Date: 2022-10-04 21:19:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 21:12:00
 */

/**
 * @description 对象数组深克隆
 * @param {Object} obj 源对象
 * @return object
 */
export function deepCopy<T>(obj: any): T {
  let newObj: any;
  try {
    newObj = obj.push ? [] : {};
  } catch (error) {
    newObj = {};
  }
  for (let attr in obj) {
    if (typeof obj[attr] === "object") {
      newObj[attr] = deepCopy(obj[attr]);
    } else {
      newObj[attr] = obj[attr];
    }
  }
  return newObj;
}
/**
 * @description 判断数据类型
 * @param {Any} val 判断类型的数据
 * @return string
 */
export function isType(val: any) {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;
  else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}

/**
 * @description 获取当前时间
 * @return string
 */
export function getCurrentTimes() {
  //获取当前时间
  let timeNow = new Date();
  //获取小时
  let hours = timeNow.getHours();
  if (hours > 6 && hours <= 10) return `早上好 ⛅`;
  if (hours > 10 && hours <= 14) return `中午好 🌞`;
  if (hours > 14 && hours <= 18) return `下午好 🌞`;
  if (hours > 18 && hours <= 24) return `晚上好 🌛`;
  if (hours > 24 && hours <= 6) return `凌晨好 🌛`;
}

/**
 * @description 数组扁平化
 * @param {Array} menuList 所有菜单列表
 * @return Array
 */
export function getFlatArr(menuList: Menu.MenuOption[]) {
  return menuList.reduce((pre: Menu.MenuOption[], current: Menu.MenuOption) => {
    let flatArr = [...pre, current];
    if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
    return flatArr;
  }, []);
}

/**
 * @description 使用递归，过滤出当前路径匹配的面包屑地址
 * @param {String} path 当前访问地址
 * @param {Array} menuList 所有菜单列表
 * @returns array
 */
export function getCurrentBreadcrumb(path: string, menuList: Menu.MenuOption[]) {
  let tempPath: Menu.MenuOption[] = [];
  try {
    const getNodePath = (node: Menu.MenuOption) => {
      tempPath.push(node);
      if (node.path === path) throw new Error("Find IT!");
      if (node.children?.length) node.children.forEach(item => getNodePath(item));
      tempPath.pop();
    };
    menuList.forEach(item => getNodePath(item));
  } catch (e) {
    return tempPath;
  }
}

/**
 * @description 双重递归找出所有面包屑存储到 pinia/vuex 中
 * @param {Array} menuList 所有菜单列表
 * @returns array
 */
export function getAllBreadcrumbList(menuList: Menu.MenuOption[]) {
  let handleBreadcrumbList: { [key: string]: any } = {};
  const loop = (menuItem: Menu.MenuOption) => {
    if (menuItem?.children?.length) menuItem.children.forEach(item => loop(item));
    else handleBreadcrumbList[menuItem.path] = getCurrentBreadcrumb(menuItem.path, menuList);
  };
  menuList.forEach(item => loop(item));
  return handleBreadcrumbList;
}
