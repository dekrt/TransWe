> **如果借鉴了本仓库的文档，麻烦帮我点一下star(右上角)和follow(关注我)，感谢！**

<div align="center">
    <img src="./pics/icon.jpg" align="center" width = "40%">
</div>
<div align = "center">
	<h1 align = "center">TransWe</h1>    
    <h4 align = "center">Translate WeChat Mini Program</h4>
    简体中文
	&nbsp;&nbsp;| &nbsp;&nbsp;
	<a href="https://github.com/dekrt/TransWe/blob/main/README-en.md">English</a>
    <br>
    <br>
    <a href = "https://dekrt.cn/"><img src="https://img.shields.io/badge/Author-dekrt-blue" alt="Author" /></a>
    <img src="https://img.shields.io/badge/Author-cdt-blue" alt="Author" />
    <a href = "https://github.com/dekrt/TransWe"><img src="https://img.shields.io/github/stars/dekrt/TransWe?style=social" alt="Stars" /></a>
    <a href = "https://github.com/dekrt/TransWe/issues"><img src="https://img.shields.io/github/issues/dekrt/TransWe?color=blue&logoColor=blue" alt="Issues" /></a>
    <a href = "https://github.com/dekrt/TransWe/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dekrt/TransWe"/></a>
</div>
### 📷 扫码体验

<div align = "center"><image src = "./pics/TransWe.jpg" width = "30%"/ ></div>


## 📱 UI界面

<div align = "center">
    <img src="./pics/UI_Translation_Text.png" width="18%" />
    <img src="./pics/UI_Choose_Language.png" width="18%" />
    <img src="./pics/UI_OCR_Translation.png" width="18%" />
    <img src="./pics/UI_Translation_Voice.png" width="18%" />
    <img src="./pics/UI_Translation_History.png" width="18%" />
</div>


## 📖 项目介绍

**TransWe**意为`Translation+Wechat`，是一个功能强大的机器翻译微信小程序，它能够通过后台机器翻译服务快速、准确地翻译各种语言。它还支持第三方OCR、语音识别和语音合成集成，为用户提供更便捷、高效的翻译服务。

TransWe功能包括：

1. 机器翻译：TransWe使用后台机器翻译服务，支持多种语言翻译，包括英语、中文、法语、德语、日语、韩语等，能够准确、快速地翻译用户的文本。
2. OCR识别：TransWe支持第三方OCR识别，用户只需要上传图片或拍摄照片，就能将图片中的文字转换为文本进行翻译。
3. 语音识别：TransWe支持第三方语音识别，用户只需要录制音频，就能将音频中的语音转换为文本进行翻译。
4. 语音合成：TransWe支持第三方语音合成，用户能够将翻译结果通过语音合成功能转换为语音输出，提高用户的交互体验。

TransWe使用简单，功能强大，只需选择需要翻译的语言，输入要翻译的文本，点击“翻译”按钮，TransWe将自动完成翻译，如果需要使用OCR识别、语音识别或语音合成功能，可以选择相应功能按钮，按照提示进行操作即可。同时TransWe还是一款完全免费的小程序，旨在为用户提供更便捷、高效的翻译服务。无论是旅行、学习还是工作，TransWe都能帮助用户轻松应对语言难题。

## 🤝 项目成员

<p>
    <a href="https://github.com/dekrt"><img src="./pics/dekrt.jpg" width="70px" alt="dekrt" border-radius: "50%"/></a>
    <a href="https://github.com/chendeting88"><img src="./pics/chendeting88.jpg" width="70px" alt="chendeting88" radius: "50%"/></a>
</p>


`TransWe`由**张骁凯**和**陈德霆**共同开发完成。

## 🚀 功能特性

**TransWe**是一款集多种功能于一身的微信小程序，旨在为用户提供便捷、高效的翻译服务。以下是TransWe的主要功能特性：

1. **多语言机器翻译**：TransWe支持多种语言的翻译，包括但不限于英语、中文、法语、德语、日语、韩语等。我们的后台机器翻译服务能够快速、准确地翻译用户的文本，满足用户在不同场景下的翻译需求。
2. **OCR识别**：TransWe集成了第三方OCR识别技术，用户只需上传图片或拍摄照片，我们的小程序就能将图片中的文字识别出来，转换为文本进行翻译。这一功能特别适用于处理图片中的外语文字，极大地提高了用户的翻译效率。
3. **语音识别**：TransWe支持第三方语音识别技术，用户只需录制音频，我们的小程序就能将音频中的语音识别并转换为文本进行翻译。这一功能使得用户在无法输入文字时，仍然可以轻松获取翻译服务。
4. **语音合成**：TransWe集成了第三方语音合成技术，用户可以将翻译结果转换为语音输出，提高了用户的交互体验，特别适用于视力不便或者需要听力辅助的用户。

TransWe的使用非常简单，用户只需选择需要翻译的语言，输入要翻译的文本，我们的小程序就会自动完成翻译。如果用户需要使用OCR识别、语音识别或语音合成功能，只需选择相应的功能按钮，按照提示进行操作即可。

TransWe是一款完全免费的小程序，我们的目标是为用户提供最便捷、高效的翻译服务。无论是旅行、学习还是工作，TransWe都能帮助用户轻松应对语言难题，让语言交流变得无障碍。

## 🧱 目录结构描述

```.
.
├─code                              //代码文件夹
│  ├─assets                         //外部工具
│  │  └─iconfont                    //矢量图库
│  ├─components                     //组件文件夹
│  │  ├─bottom-button               //录音按钮
│  │  ├─modal                       //复制按钮
│  │  ├─play-icon                   //组件动画
│  │  ├─result-bubble               //翻译气泡
│  │  └─waiting-icon                //等待图标
│  ├─imgs                           //小程序内部图片文件夹
│  ├─pages                          //所有页面					    
│  │  ├─choose_language             //选择语言
│  │  ├─edit                        //文本编辑页面
│  │  ├─getPic                      //获取图片
│  │  ├─history                     //翻译历史
│  │  ├─history_test                //翻译历史前端测试
│  │  ├─index                       //主页
│  │  ├─index_test                  //主页前端测试
│  │  ├─OCR                         //拍照翻页界面
│  │  └─voice_translation           //语音翻译界面
│  ├─TDD_test_cdt                   //TDD开发语音翻译
│  ├─TDD_test_zxk                   //TDD开发文本翻译
│  └─utils                          //插件
│      api.js                       //翻译api接口
│      conf.js                      //翻译配置
│      md5.min.js                   //获取MD5加密
│      util.js                      //获取时间配置
├─docs                              //所有文档
│      API.md                       //API接口文档
│      CurriculumDesignReport.md    //课设报告文档
│      SystemArchitecture.md        //系统架构文档
│      SystemDesign.md              //系统设计文档
│      SystemRequirement.md         //系统需求文档
│      UI_Design.md                 //UI设计文档
│      UserRequirement.md           //用户需求文档
└─pics                              //图片
```

## ⭐️ 版本内容更新

- **2023/06/02 TransWe v1.0**: 基本实现全部功能

## 📃协议

 [![GitHub](https://img.shields.io/github/license/dekrt/TransWe?style=for-the-badge)](https://github.com/dekrt/TransWe/blob/main/LICENSE)

>**警告**
>
>除GPLv3许可下的源代码外，其他方均禁止使用TransWe的名义作为下载器应用，TransWe的衍生产品亦同。
>衍生品包括但不限于分叉和非官方构建。
