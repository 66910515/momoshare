/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32454734&pid=ff6a8b3a651ee2874e97b338d9ef1358&tid=e9417164027beb4e9ae0bf3d49b79ffb",
    "https://www.maimemo.com/share/page?uid=32454734&pid=51406dd9e063b581acceb3363d60e3c3&tid=e22a83446318a25969f7f24f913fa60c",
    "https://www.maimemo.com/share/page?uid=32454734&pid=ff6a8b3a651ee2874e97b338d9ef1358&tid=e9417164027beb4e9ae0bf3d49b79ffb",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/page?sid=57a9b8c3f0fa27a92162cea28c4bb405&uid=20663673&pid=14bf2950f93c05efc461fbea94fcc973&tid=5186e89144b95ec807f7ba43c7271734&view_time=1706172130&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit0inryc0WCIuR4-D453p2PM&token=503de072b65611c38b11d7ee415ebe6a3724cbdead4d4188f09b85be90d81469&expired_time=2025-01-24T16:42:10%2008:00",


  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
