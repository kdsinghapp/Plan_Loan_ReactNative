// src/localization/Languages.ts
import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SupportedLang = 'en' | 'zh';

const strings = new LocalizedStrings({
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
    close: "Close",
    loan: "Loan",
    currentLoan: "Current Loan Amount",
    repayLoan: "Repay Loan",
    loanRepayment: "Loan Repayment",
    LoanInformation: "Loan Information",
    wantTo: "Want To Borrow More?",
    RepaidAmount: "Repaid Amount",
    LoremIpsum: "Lorem Ipsum",
    LoanHistory: "Loan History",
    Help: "Help",
    HelpCenter: "Help Center",
    FAQ: "FAQ",
    ContactSupport: "Contact Support",
    RequestSupport: "Request Support",
    Subject: "Subject",
    Entersubject: "Enter subject",
    Message: "Message",
    EnterMess: "Enter message",
    Continue: "Continue",
    Profile: "Profile",
    Facebook: "Facebook",
    Gender: "Gender",
    Dob: "DOB",
    Age: "Age",
    PhoneNumber: "Phone Number",
    Address: "Address",
    State: "State",
    EditProfile: "Edit Profile",
    ApplyforLoa: "Apply for a Loan",
    EnterAmount: "Enter Amount",
    PreviewInterestRate: "Preview Interest Rate",
    Confirm: "Confirm",
    ChangePasswordScreen: "Change Password",
    EnteryourEmail: "Enter your email",
    Password: "Password",
    LogIn: "Log In",
    fullname: "Enter your full name",
    FuName: "Full Name",
    Enteryourpassword: "Enter your password",
    DateBirth: "Date of Birth",
    Cancel: "Cancel",
    Done: "Done",
    SaveChanges: "Save Changes",
    PrivacyPolicy: "Privacy Policy",
    DeleteAccount: "Delete Account",
    deleteText: "Are you sure you want to delete your account? You’ll lose all your data and access permanently.",
    Delete: "Delete",
    Confirmdelete: "Confirm delete" ,
        Notifications:"Notifications" ,
        gmailError:"Please enter your email",
passwordError:"Please enter your password",
enterCode: "Please enter a 4-digit code." ,
checkGmail :"Check your gmail"
  },
  zh: {
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
    close: "關閉",
    loan: "贷款",
    currentLoan: "当前贷款金额",
    repayLoan: "偿还贷款",
    loanRepayment: "贷款偿还",
    LoanInformation: "贷款信息",
    wantTo: "想要借更多吗",
    RepaidAmount: "已偿还金额",
    LoremIpsum: "乱数存根",
    LoanHistory: "贷款历史",
    Help: "帮助",
    HelpCenter: "帮助中心",
    FAQ: "常问问题",
    ContactSupport: "联系支持",
    RequestSupport: "请求支持",
    Subject: "主题",
    Entersubject: "输入主题",
    Message: "信息",
    EnterMess: "输入消息",
    Continue: "继续",
    Profile: "轮廓",
    Facebook: "Facebook",
    Gender: "性别",
    Dob: "出生日期",
    Age: "年龄",
    PhoneNumber: "电话号码",
    Address: "地址",
    State: "状态",
    EditProfile: "编辑个人资料",
    ApplyforLoa: "申请贷款",
    EnterAmount: "输入金额",
    PreviewInterestRate: "预览利率",
    Confirm: "确认",
    ChangePasswordScreen: "更改密码",
    EnteryourEmail: "输入您的电子邮件",
    Password: "密码",
    LogIn: "登录",
    fullname: "输入您的全名",
    FuName: "姓名",
    Enteryourpassword: "输入您的密码",
    DateBirth: "出生日期",
    Cancel: "取消",
    Done: "完毕",
    SaveChanges: "保存更改",
    PrivacyPolicy: "隐私政策",
    DeleteAccount: "删除帐户",
    deleteText: "您确定要删除您的帐户吗？您将永久丢失所有数据和访问权限。",
    Delete: "删除",
    Confirmdelete: "确认删除" ,
    Notifications:"通知" ,
            gmailError:"请输入您的电子邮件" ,
            passwordError:"请输入您的密码",
enterCode:"请输入 4 位数代码" ,
checkGmail :"检查你的 Gmail",
pleasePut:"Please put the 4 digits sent to you"


  }
});

// Load saved language or set default 'zh'
export const loadLanguage = async () => {
  const savedLang = await AsyncStorage.getItem('appLanguage');
  if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
    strings.setLanguage(savedLang);
  } else {
    strings.setLanguage('zh'); // set Chinese as default
  }
};

// Change language
export const changeAppLanguage = async (lang: SupportedLang) => {
  strings.setLanguage(lang);
  await AsyncStorage.setItem('appLanguage', lang);
};

export default strings;
