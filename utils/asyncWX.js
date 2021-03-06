/**
 * promise形式的getSetting
 */
export const getSetting=()=>{
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}

/**
 * promise形式的chooseAddress
 */
export const chooseAddress = () =>{
    return new Promise((resolve,reject)=>{
        wx.chooseAddress({
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            }
        });
          
    })
}
/**
 * promise形式的openSetting
 */
export const openSetting = () =>{
    return new Promise((resolve,reject)=>{
        wx.openSetting({
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            }
        });
          
    })
}
/**
 * promise形式的showModal
 */
export const showModal = ({content}) =>{
    return new Promise((resolve,reject)=>{
        wx.showModal({
            title: '提示',
            content: content,
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: (result) => {
              resolve(result)
            },
            fail:(err)=>{
                reject(err)
            }
          });
          
          
    })
}

/**
 * promise形式的showToast
 */
export const showToast=({title})=>{
    return new Promise((resolve,reject)=>{
       wx.showToast({
           title: title,
           icon: 'success',
           image: '',
           duration: 1500,
           mask: true,
           success: (result) => { 
               resolve(result)
           },
           fail: () => {},
           complete: () => {
           }
       });
                   
    })
}

/**
 * promise形式的login
 */
export const login=()=>{
    return new Promise((resolve,reject)=>{
       wx.login({
           timeout:10000,
           success: (result) => {
               resolve(result)
           },
           fail: (err) => {
               reject(err)
           }
       });
         
                   
    })
}