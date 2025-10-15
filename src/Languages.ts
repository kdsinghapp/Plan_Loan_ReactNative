// src/localization/Languages.ts
import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

let strings = new LocalizedStrings({
  en: {
    home: "Home",
    howToUse: "How To Use",
    terms: "Terms & Conditions",
    helpFeedback: "Help & Feedback",
    logout: "Logout",
    logoutConfirmTitle: "Logout?",
    logoutConfirmMessage: "Are you sure you want to logout from this account?",
    yes: "Yes",
    no: "No",
    changeLanguage: "Change Language",
    selectLanguage: "Select your preferred language:",
    english: "English",
    chinese: "Chinese",
    close: "Close" ,
    loan:"Loan",
    currentLoan:"Current Loan Amount " ,
    repayLoan:"Repay Loan" ,
    loanRepayment:"Loan Repayment" ,
    LoanInformation:"Loan Information" ,
    wantTo:"Want To Borrow More?" ,
    RepaidAmount:"Repaid Amount",
LoremIpsum:"Lorem Ipsum",
    LoanHistory:"Loan History" ,
Help:"Help" ,
HelpCenter:"Help Center" ,
FAQ:"FAQ" ,
ContactSupport:"Contact Support" ,
RequestSupport:"Request Support" ,
Subject:"Subject" ,
Entersubject:"Enter subject" ,
Message:"Message" ,
EnterMess:"Enter message" ,
Continue:"Continue" ,
            Profile:"Profile",

Facebook:"Facebook" ,
Gender:"Gender",
Dob:"DOB" ,
Age:"Age",
PhoneNumber:"Phone Number",
Address:"Address" ,
State:"State" ,
 EditProfile:" Edit Profile" ,
 ApplyforLoa:"Apply for a Loa" ,
 EnterAmount:"Enter Amount",
PreviewInterestRate:"Preview Interest Rate" ,
Confirm:"Confirm" ,
ChangePasswordScreen:"Change Password" ,
EnteryourEmail:"Enter your email" ,
Password:"Password" ,
LogIn:"Log In"

  },
  zh: {
     EditProfile:"编辑个人资料"
,
    State:"状态"
,
    Address:"地址"
,
    PhoneNumber:"电话号码"
,
    Age:"年龄"
,
    home: "首頁",
    howToUse: "如何使用",
    terms: "條款與條件",
    helpFeedback: "幫助與回饋",
    logout: "登出",
    logoutConfirmTitle: "登出？",
    logoutConfirmMessage: "您確定要登出此帳戶嗎？",
    yes: "是",
    no: "否",
    changeLanguage: "更改語言",
    selectLanguage: "選擇您偏好的語言：",
    english: "英文",
    chinese: "中文",
    close: "關閉" ,
    loan:"贷款",
     currentLoan:"当前贷款金额",
    repayLoan:"偿还贷款" ,
    loanRepayment:"贷款偿还" ,
        LoanInformation:"贷款信息" ,
            wantTo:"想要借更多吗" ,
                RepaidAmount:"已偿还金额" ,
                LoremIpsum:"乱数存根" ,
                LoanHistory:"贷款历史",
                          
Help:"帮助"
,
HelpCenter:"帮助中心" ,
FAQ:"常问问题",
ContactSupport:"联系支持" ,
RequestSupport:"请求支持",
Subject:"主题" ,
Entersubject:"输入主题" ,
Message:"信息" ,
EnterMess:"输入消息" ,
Continue:"继续" ,
            Profile:"轮廓",
Facebook:"Facebook",
Gender:"性别" ,
Dob:"出生日期" ,
 ApplyforLoa:"申请 Loa" ,
EnterAmount:"输入金额",
PreviewInterestRate:"预览利率" ,
Confirm:"确认" ,
Password:"密码" ,

ChangePasswordScreen:"更改密码" ,
EnteryourEmail:"输入您的电子邮件",
LogIn:"登录"
  }
});

// Load saved language
export const loadLanguage = async () => {
  const savedLang = await AsyncStorage.getItem('appLanguage');
  if (savedLang) {
    strings.setLanguage(savedLang);
  }
};

// Change language
export const changeAppLanguage = async (lang: 'en' | 'zh') => {
  strings.setLanguage(lang);
  await AsyncStorage.setItem('appLanguage', lang);
};

export default strings;
