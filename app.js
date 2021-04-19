/*
 * @Descripttion: 
 * @version: 
 * @Author: wsz
 * @Date: 2021-04-11 22:02:31
 * @LastEditors: wsz
 * @LastEditTime: 2021-04-18 21:54:43
 */
/**
 *  题目描述
    如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
    否则如果字符 Unicode 编码 > 255 则长度为 2
 */
// function strLength(s, bUnicode255For1) {
//     if(bUnicode255For1){
//         return s.length
//     }else{
//         let len = s.length
//         for(let i = 0; i < len; i++){
//             if(s.charCodeAt(i) > 255){
//                 len++
//             }
//         }
//         return len
        
//     }
// }
// console.log(strLength('hello world, 牛客', true))
// console.log('牛客'.charCodeAt(1))

/**
 * 判断输入是否是正确的邮箱格式
 * \d:所有数字字符 == [0-9]
 * \w:所有单词字符 == [0-9a-zA-Z_]
 * \s:空白符，包含Tab和换行符
 * \D:非数字字符
 * \W:非单词字符
 * \S:非空白字符
 * .:任意字符(除换行符)
 * ^:匹配行首
 * $:匹配行尾
 */
// function isAvailableEmail(sEmail) {
//     var regexp = /^[\da-z]+[\w\.-]?[\da-z]+@[a-z\d]+[\w\.-]?[a-z\d]+\.[a-z\d]{2,}$/i  //设定正确的邮箱正确正则表达式
//     return regexp.test(sEmail);
// }
// var flag = isAvailableEmail('1298643812@qq.com')
// console.log(flag)

/**
 * 题目描述
   将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
   1. rgb 中每个 , 后面的空格数量不固定
   2. 十六进制表达式使用六位小写字母
   3. 如果输入不符合 rgb 格式，返回原始输入
 */
// function rgb2hex(sRGB) {
//    var regexp=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;  //设置正则表达式规范
//    var ret=sRGB.match(regexp);           
//    if(!ret){
//        return sRGB;
//    }else{
//        var str='#';
//        for(var i=1;i<=3;i++){
//            var m=parseInt(ret[i]);
//            if(m<=255&&m>=0){
//                str+=(m<16?'0'+m.toString(16):m.toString(16));
//            }else{
//                return sRGB;
//            }
//        }
//        return str;
//    }
// }
// var rest = rgb2hex('rgb(258,254,123)')
// console.log(rest)

/**
 * 题目描述
   css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
   1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
   2. -webkit-border-image 转换后的结果为 webkitBorderImage
 */
// function cssStyle2DomStyle(sName) {
//    return sName.replace(/\-[a-z]/g , function(a, b){
//       return b == 0 ? a.replace('-','') : a.replace('-','').toUpperCase()
//   })
// }
// function cssStyle2DomStyle(sName) {
//    return sName.replace(/\-[a-z]/g , (a,b) => b == 0 ? a.replace('-','') : a.replace('-','').toUpperCase())
// }
// var rest = cssStyle2DomStyle('--web-kit-image')
// console.log(rest)

// function mstr(sName){
//    regExp = /\-[a-z]/g
//    return sName.match(regExp)
// }
// console.log(mstr('-webkit-image'))

// var str = "-webkit-image";
// var result = str.replace(/\-[a-z]/, function(match,p1,p2,offset,str){ 
//    console.log('1')
//    console.log(match);    //abcd-abcd  匹配的内容  
//    console.log('2')
//    console.log(p1);    //第一个括号中匹配的内容
//    console.log('3')
//    console.log(p2);    //第二个括号匹配的内容   
//    console.log('4') 
//    console.log(offset);//0 匹配到的字符串的索引(偏移量)   
//    console.log('5')  
//    console.log(str);    //原始字符串    
//    console.log('6')
//    // return [p1,p2].join("+");
// });
// console.log(result);// 输出 abcd+abcd+1234// 原字符串中 abcd-abcd 被匹配后 被替换为function返回的内容

// function approInt(flt){
//   var _int = parseInt(flt)
//   var err = flt - _int
//   if(err*10 > 5){
//       return _int +1
//   }else{
//       return _int
//   }
// }
// console.log(approInt(2.3)) 

function test(str){
  let month = parseInt(str)
  let preNum = 0
  let currNum = 1
  for(let i = 2; i <= month; i++){
      let tem = currNum
      currNum = currNum + preNum
      preNum = tem
  }
  console.log(currNum)
}
test(5)
