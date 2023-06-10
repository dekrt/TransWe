# 1. 项目概述

## 1.1 项目基本介绍

<div align="center">
    <img src="../pics/icon.jpg" align="center" width = "40%">
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
</div>

### 📱 UI界面

<div align = "center">
    <img src="../pics/UI_Translation_Text.png" width="18%" />
    <img src="../pics/UI_Choose_Language.png" width="18%" />
    <img src="../pics/UI_OCR_Translation.png" width="18%" />
    <img src="../pics/UI_Translation_Voice.png" width="18%" />
    <img src="../pics/UI_Translation_History.png" width="18%" />
</div>



### 📖 项目介绍

**TransWe**意为`Translation+Wechat`，是一个功能强大的机器翻译微信小程序，它能够通过后台机器翻译服务快速、准确地翻译各种语言。它还支持第三方OCR、语音识别和语音合成集成，为用户提供更便捷、高效的翻译服务。

TransWe功能包括：

1. 机器翻译：TransWe使用后台机器翻译服务，支持多种语言翻译，包括英语、中文、法语、德语、日语、韩语等，能够准确、快速地翻译用户的文本。
2. OCR识别：TransWe支持第三方OCR识别，用户只需要上传图片或拍摄照片，就能将图片中的文字转换为文本进行翻译。
3. 语音识别：TransWe支持第三方语音识别，用户只需要录制音频，就能将音频中的语音转换为文本进行翻译。
4. 语音合成：TransWe支持第三方语音合成，用户能够将翻译结果通过语音合成功能转换为语音输出，提高用户的交互体验。

TransWe使用简单，功能强大，只需选择需要翻译的语言，输入要翻译的文本，点击“翻译”按钮，TransWe将自动完成翻译，如果需要使用OCR识别、语音识别或语音合成功能，可以选择相应功能按钮，按照提示进行操作即可。同时TransWe还是一款完全免费的小程序，旨在为用户提供更便捷、高效的翻译服务。无论是旅行、学习还是工作，TransWe都能帮助用户轻松应对语言难题。

### 🤝 项目成员

<div>
    <a href="https://github.com/dekrt"><img src="../pics/dekrt.jpg" width="70px" alt="dekrt" border-radius: "50%"/></a>
    <a href="https://github.com/chendeting88"><img src="../pics/chendeting88.jpg" width="70px" alt="chendeting88" radius: "50%"/></a>
</div>

`TransWe`由**张骁凯**和**陈德霆**共同开发完成。

### 🚀 功能特性

**TransWe**是一款集多种功能于一身的微信小程序，旨在为用户提供便捷、高效的翻译服务。以下是TransWe的主要功能特性：

1. **多语言机器翻译**：TransWe支持多种语言的翻译，包括但不限于英语、中文、法语、德语、日语、韩语等。我们的后台机器翻译服务能够快速、准确地翻译用户的文本，满足用户在不同场景下的翻译需求。
2. **OCR识别**：TransWe集成了第三方OCR识别技术，用户只需上传图片或拍摄照片，我们的小程序就能将图片中的文字识别出来，转换为文本进行翻译。这一功能特别适用于处理图片中的外语文字，极大地提高了用户的翻译效率。
3. **语音识别**：TransWe支持第三方语音识别技术，用户只需录制音频，我们的小程序就能将音频中的语音识别并转换为文本进行翻译。这一功能使得用户在无法输入文字时，仍然可以轻松获取翻译服务。
4. **语音合成**：TransWe集成了第三方语音合成技术，用户可以将翻译结果转换为语音输出，提高了用户的交互体验，特别适用于视力不便或者需要听力辅助的用户。

TransWe的使用非常简单，用户只需选择需要翻译的语言，输入要翻译的文本，我们的小程序就会自动完成翻译。如果用户需要使用OCR识别、语音识别或语音合成功能，只需选择相应的功能按钮，按照提示进行操作即可。

TransWe是一款完全免费的小程序，我们的目标是为用户提供最便捷、高效的翻译服务。无论是旅行、学习还是工作，TransWe都能帮助用户轻松应对语言难题，让语言交流变得无障碍。

### 🧱 目录结构描述

```
.
├─code                              //代码文件夹
│  ├─assets							//外部工具
│  │  └─iconfont					//矢量图库
│  ├─components					    //组件文件夹
│  │  ├─bottom-button				//录音按钮
│  │  ├─modal						//复制按钮
│  │  ├─play-icon					//组件动画
│  │  ├─result-bubble				//翻译气泡
│  │  └─waiting-icon				//等待图标
│  ├─imgs						    //小程序内部图片文件夹
│  ├─pages							//所有页面					    
│  │  ├─choose_language			    //选择语言
│  │  ├─edit					    //文本编辑页面
│  │  ├─getPic					    //获取图片
│  │  ├─history						//翻译历史
│  │  ├─history_test				//翻译历史前端测试
│  │  ├─index						//主页
│  │  ├─index_test					//主页前端测试
│  │  ├─OCR							//拍照翻页界面
│  │  └─voice_translation			//语音翻译界面
│  ├─TDD_test_cdt					//TDD开发语音翻译
│  ├─TDD_test_zxk					//TDD开发文本翻译
│  └─utils							//插件
│      api.js						//翻译api接口
│      conf.js						//翻译配置
│      md5.min.js					//获取MD5加密
│      util.js						//获取时间配置
├─docs								//所有文档
│      API.md						//API接口文档
│      CurriculumDesignReport.md	//课设报告文档
│      SystemArchitecture.md		//系统架构文档
│      SystemDesign.md				//系统设计文档
│      SystemRequirement.md			//系统需求文档
│      UI_Design.md					//UI设计文档
│      UserRequirement.md			//用户需求文档
└─pics								//图片
```

### ⬇️ 版本内容更新

- **2023/06/02 TransWe v1.0**: 基本实现全部功能

### 📃 协议

 [![GitHub](https://img.shields.io/github/license/dekrt/TransWe?style=for-the-badge)](https://github.com/dekrt/TransWe/blob/main/LICENSE)

>**警告**
>
>除GPLv3许可下的源代码外，其他方均禁止使用TransWe的名义作为下载器应用，TransWe的衍生产品亦同。
>衍生品包括但不限于分叉和非官方构建。


## 1.2 Github仓库地址

[TransWe](https://github.com/dekrt/TransWe): <https://github.com/dekrt/TransWe>

## 1.3 人员基本分工

### 1.3.1 **张骁凯**（负责人）：

作为项目的负责人，张骁凯将承担项目的后端开发工作，工作内容丰富且富有挑战性，主要包括：

1. **负责Github仓库管理**：张骁凯将负责整个Github仓库的管理工作，包括代码的整理、归档以及版本的管理。他还将负责编写详实的README文档，以便于其他团队成员以及可能接触项目的人对项目有明确的了解。
2. **将需求作为Issue录入**：为了保证项目开发的流畅进行，张骁凯将负责将所有的需求作为Issue录入Github，这样可以保证每一个需求都能被详细跟踪，从而高效地进行项目管理。
3. **共同进行系统设计：**他将积极参与系统设计，利用他的技术专长帮助设计出高效且易于维护的系统。
4. **用户界面设计：**张骁凯将负责用户界面的设计和开发，他会注重用户体验，致力于创建出既易于使用又美观的用户界面。
5. **系统流程分析：**他将通过绘制时序图进行系统流程分析，这有助于更好地理解和设计系统。
6. **TDD测试：**张骁凯将采用测试驱动开发（TDD）的方法，为代码编写详尽的单元测试，以确保代码的质量和稳定性。
7. **机器翻译服务**：张骁凯将负责与后台机器翻译服务的接口开发和维护，他将通过技术手段，确保翻译服务的准确性和效率，提供优质的用户体验。
8. **拍照翻译服务：**他还将负责开发拍照翻译服务，使用户能够通过拍照的方式获得翻译结果，为用户提供更多的便利。
9. **前端页面编写**：张骁凯将完成`index(小程序主页)、getPic拍照界面）、OCR（获取翻译结果）、history（翻译历史）`等页面的前端和后端代码编写，他将负责实现用户界面设计，同时也会对代码进行详细的测试，以保证其正确性和稳定性。
10. **数据库管理**：他将负责数据库的设计和管理，通过合理的数据结构设计和索引优化，确保用户数据的安全和完整。
11. **性能优化**：张骁凯将专注于系统的性能优化，通过合理的代码架构和算法优化，他将确保系统在高并发情况下的稳定运行。
12. **编写文档**：为了保证项目的可维护性和持续性，他将负责编写清晰且详细的开发文档，以便于后续的开发和维护工作。

### 1.3.2 **陈德霆**（副负责人）：

陈德霆将主要负责项目的前端开发和用户体验设计，包括但不限于：

1. **共同撰写需求**：一起参与需求讨论和构思，确保对项目的理解一致，从而能够产生详尽而有用的项目需求文档。在撰写需求过程中，努力保证每个要求都准确、清晰，易于理解且可行。
2. **共同进行系统设计**： 在深入理解了项目需求之后，参与到系统设计中来。确保每个设计决策都能满足项目的需求，同时也会考虑到系统的可扩展性和可维护性。
3. **辅助用户界面设计**：优化部分用户页面，以用户为中心，优化用户体验，使其简单易用。
4. **系统设计**：参与系统架构的设计，负责组件设计以及组件接口的设计。
5. **语音合成功能**：负责语音合成功能的开发和测试，和相关页面集成，确保这些功能的正常运行。
6. **组件开发**：负责components中五个小组件的开发和测试，每一个小组件都将被精心设计和编写，以确保它们在整个系统中都能发挥关键的作用。
7. **页面编写**：完成了**choose_languege**（语言选择页面）、**edit**（文本编辑页面）、**voice_translation**（语音翻译页面）这几个页面的前端、后端代码编写，实现了用户界面设计，和界面的逻辑功能，并进行了测试
8. **编写文档**：包括但不限于设计文档、开发文档、测试文档。

# 2. 需求描述

## 2.1 功能性描述

### 2.1.1 用户需求

#### 1 集成翻译服务（Translation Service）

1. 用户需求：

- 用户在输入框中输入文字，选择输入语言与目标语言，程序在输出框中给出翻译结果。

2. 用户需求标识：**TransWe-UR-TS**

#### 2 集成第三方OCR功能（Optical Character Recognition）

1. 用户需求：

- 用户可以选择使用图片转文字服务（OCR），并进行拍照（或选择图库中的图片）进行翻译。

2. 用户需求标识 ：**TransWe-UR-OCR**

#### 3 集成第三方语音识别(Speech Recognition):

1. 用户需求：

- 用户选择输入语言及目标语言，通过语音进行输入，程序以文字形式展示输入结果与翻译结果。

2. 用户需求标识：**TransWe-UR-SR**

#### 4 集成第三方语音合成（Speech Synthesis）

1. 用户需求：

- 用户在翻译完成后点击发声按钮，程序将翻译结果以语音的形式进行输出。

2. 用户需求标识：**TransWe-UR-SS**

### 2.1.2 系统需求

#### 1 基础翻译功能（TransWe-SR-TS）

1. **初始假设：** 

-  用户在输入框中输入文字，选择输入语言与目标语言，程序在输出框中给出翻译结果。

2. **正常状态：** 

-  用户在输入框中输入待翻译的文本，**程序会自动检测输入语言**，用户在下拉菜单中选择相应的目标语言。
-  用户也可以**手动选择输入语言**。输入完成后，程序将进行翻译并在输出框中显示翻译结果。

3. **有哪些会出错：**

- 输入的文本中包含无法识别的字符或语言。程序会提示用户重新输入或手动选择语言。 
- 输入的文本过长或复杂，程序无法进行翻译。程序会提示用户缩短输入文本或尝试其他翻译方式。
- 网络连接不稳定，程序无法进行翻译。程序会提示用户检查网络连接并重试。

4. **其他活动：**

- 用户可以在下拉菜单中选择默认语言，程序会在下一次启动时自动选择该语言。
- 程序会记录用户的翻译历史，并允许用户在历史记录中查看以前的翻译结果。 

5. **完成的系统状态：** 

- 用户可以通过打开程序，并进入翻译界面来进行翻译。程序会自动检测输入语言，并在下拉菜单中选择相应的目标语言。
- 用户在输入框中输入待翻译的文本后，程序会进行翻译并在输出框中显示翻译结果。
- 程序记录了用户的翻译历史，并允许用户在历史记录中查看以前的翻译结果。

#### 2 集成第三方OCR功能的脚本（TransWe-SR-OCR）

1. **初始假设：** 

- 用户需要使用一个微信翻译小程序，该小程序集成了第三方OCR功能，用户可以通过拍照或上传照片将图片中的待翻译文本识别成目标语言并显示到图片上。

2. **正常状态：** 

- 用户打开小程序，选择OCR功能，进入拍照界面。用户可以**使用手机摄像头拍下待识别的图片**，也可以**按下图库按钮上传照片**。进入图片编辑界面后，**用户可以选择整张图片或者框选一部分图片**，用户需要选择待翻译的语言种类和目标语言种类。检测到用户按下翻译按钮时，系统应该调用OCR服务对目标图片进行文字识别，并在界面上显示识别结果。

- 系统应该允许用户在翻译后重新选择图片，重新选择翻译语言并进行翻译。

3. **有哪些会出错：**

- 系统权限不足，无法访问用户图库。
- 第三方OCR功能出现故障，导致无法完成文字识别。

4. **其他活动：**

- 系统应该保证用户隐私，不记录用户的OCR识别记录。
- 系统应该对用户图库进行保护，确保不被未授权的其他脚本访问。

5. **完成的系统状态：** 

- 用户可以通过OCR功能成功识别图片中的文字并进行翻译。

#### 3 语音识别功能（TransWe-SR-SR）

1. **初始假设：** 

- 用户希望通过语音输入来输入翻译内容，系统需要进行语音识别功能，将语音转换为文本，再进行翻译操作。

2. **正常状态：** 

- 用户点击语音输入按钮，系统开始录音并将录音转换为文本格式，并输出到屏幕上。 
- 系统对文本**进行分词**并进行翻译操作。
- 翻译结果以文本形式**呈现在界面上**。

3. **有哪些会出错：**

- 语音输入的质量不好，无法被识别成文本。系统应该提示用户录音质量不好，请重试。 
- 翻译服务不可用或异常。系统应该提示用户翻译服务暂时不可用，请稍后再试。

4. **其他活动：**

- 系统应该保证用户隐私，不记录用户的语音输入内容。
- 系统应该对录音文件进行保护，确保不被未授权的人访问。

5. **完成的系统状态：** 

- 用户可以通过语音输入方式进行翻译操作。
- 系统可以对语音进行识别并将其转换为文本格式。 
- 系统可以对文本进行分词和翻译操作，将翻译结果呈现在界面上。

#### 4 语音合成功能（TransWe-UR-SS）

1. **初始假设：** 

- 用户希望通过语音的形式来输出翻译内容，系统需要进行语音合成功能，将文本转换为语音，再通过扬声器播放。

2. **正常状态：** 

- 用户正常进行翻译后，点击语音输出按钮，系统开始进行语音合成并将翻译结果以**语音的形式进行输出**。
- 翻译结果以**文本形式呈现**在界面上。

3. **有哪些会出错：**

- 系统语音合成功能出现故障，无法将文本正确转换为语音。
- 扬声器或音频设备出现故障，无法正常播放语音。

4. **其他活动：**

- 当正在播放合成的语音时，图标的颜色将会改变；播放完成后回到原来的颜色。

5. **完成的系统状态：** 

- 用户可以通过语音输入并输出翻译内容，系统可以将文本转换为语音，并通过扬声器播放出来。系统记录了用户的输入和输出内容，并可以对其进行分析和统计。

## 2.2 非功能性需求

### 2.2.1 **性能需求**：

- 翻译响应时间：对于用户输入的文本，系统应在1秒内返回翻译结果。
- OCR识别和语音识别的处理时间：对于用户上传的图片或音频，系统应在5秒内完成识别并返回结果。
- 系统应能够支持高并发请求，即在用户量剧增的情况下，系统的性能不会显著下降。

### 2.2.2 **安全性需求**：

- 用户的个人信息和使用数据应得到充分保护，不得泄露给第三方。
- 系统应具备防止恶意攻击的能力，如DDoS攻击、SQL注入等。

### 2.2.3 **可用性需求**：

- 系统的正常运行时间应达到99.9%。
- 在出现故障时，系统应能在1小时内恢复正常。

### 2.2.4 **可维护性需求**：

- 系统应具备良好的模块化和文档化，以便进行维护和升级。
- 系统应能够容易地添加新的语言支持和新的功能。

### **2.2.5 可扩展性需求**：

- 系统应设计成可扩展的架构，以便在未来可以添加更多的功能，如多语言支持、语音翻译等。

### 2.2.6 **用户体验需求**：

- 系统的用户界面应简洁易用，用户能够快速理解如何使用各项功能。
- 系统应提供用户反馈功能，用户可以方便地报告问题和提出建议。

# 3.  **系统设计**

## 3.1 **架构设计**

我们的翻译小程序采用分层架构的架构模式，架构示意图如下：

![](../pics/system_architecture.png)

### 3.1.1 表示层（Presentation Layer）

表示层是用户与系统交互的界面，包括用户界面、数据输入、输出等。这一层主要负责将用户请求传递给下一层，并将处理结果返回给用户。在我们的翻译软件中，表示层包括用户输入文本的界面、显示翻译结果的界面、对翻译结果进行输出的页面等，以及获取用户的授权信息。

### 3.1.2 应用层（Application Layer） 

应用层是系统的核心层，它实现了翻译的核心算法和业务逻辑，包括文本处理、翻译算法等。这一层主要负责接收并处理表示层传递的请求，然后调用其他层的服务，最后将处理结果返回给表示层。在我们的小程序中，应用层负责：

1. 获取用户输入：
   - 手动输入
   - OCR识别
   - 语音输入
2. 获取输出结果：
   - 文本输出
   - 语音合成输出

### 3.1.3 服务层（Service Layer） 

服务层为应用层提供支持，包括网络通信、数据访问、存储等服务。这一层主要负责处理数据的存储和访问，以及与其他系统的交互。在我们的翻译软件中，服务层可以包括调用翻译接口获取翻译结果、调取OCR接口获取OCR识别结果、调取语音合成API对翻译结果进行语音输出等。

总的来说，以上三个层级构成了一个完整的翻译软件系统，每个层级都负责不同的功能，各司其职。这种分层架构模式使得系统更加清晰、易于扩展和维护。

## 3.2**界面原型设计**

### 3.2.1. 主页面（Main Page）

主页是小程序的入口，包括小程序的基本信息和主要功能模块。页面包含四个模块，分别是文字翻译，录音按钮、OCR翻译按钮和翻译历史记录。

- **文本输入框**：用户可以在这个框中手动输入需要翻译的文本。
- **翻译框**：用户输入文本、点击这个按钮开始翻译。
- **语音播放器**：用户点击播放语音。
- **语言选择器**：用户可以在这里选择源语言和目标语言。
- **语音按钮**：用户可以点击这个按钮，跳转到语音翻译页面。
- **OCR按钮**：用户可以点击这个按钮，跳转到语音OCR页面。
- **翻译历史按钮**：用户可以点击这个按钮，跳转到翻译历史页面。

### 3.2.2.语言选择页（Settings Page）

语言选择页提供用户多种翻译语言。用户可以选择支持的语言。

- **语言设置**：用户可以在这里更改默认的源语言和目标语言。

### 3.2.3.语音翻译页（Voice Translation Page）

语音翻译页是用户输入需要翻译的语音的页面。页面主要包括录音按钮、语言选择器和翻译结果框。翻译结果框会以卡片形式保存下来，用户可以编辑录入的文字。

- **录音按钮**：位于页面下方，用户可以点击此按钮开始进行语音输入，输入的语音将被实时转化为文字并显示在结果框内。
- **语言选择器**：位于页面顶部，用户可以在此一键切换中英文。
- **翻译结果框**显示用户录音输入的文字以及翻译结果。翻译结果以卡片形式保存并展示，每个卡片包括原文和译文，用户可以删除不要的卡片。
- **编辑按钮**：每个翻译结果卡片右上角都会有一个编辑按钮，用户点击后可以对录入的文字进行编辑，编辑完成后翻译结果将自动更新。
- **返回按钮**：页面左上角有一个返回按钮，用户点击后可以返回主页面。

### 3.2.4.OCR拍照翻译页面（OCR  Translation Page）

OCR拍照翻译页面是用户能够通过拍照进行翻译的地方。

- **拍照按钮**：用户可以点击这个按钮，利用手机相机进行拍摄，完成拍摄后，系统会自动进行识别并将图片中的文字进行翻译。
- **翻译结果展示区**：系统完成翻译后，翻译结果将会在这个区域显示，用户可以查看翻译结果。

### 3.2.5.翻译历史页（Translation History Page）

翻译历史页面保存用户之前的文字翻译和语音翻译记录。

- **翻译历史**：用户可以划动屏幕查询所有的本地翻译记录。每条历史以卡片形式保存并展示，每个卡片包括原文和译文。

## 3.3 **详细设计**

### 3.3.1. 组件设计

<div align = "center">
    <img src="../pics/../pics/Package_Diagram.png" />
</div>


### 3.3.2. 组件接口设计

#### 1 数据库接口

<div align = "center">
    <img src="../pics/Interface_DataBase.png" />
</div>


- `saveTranslationRecord(record: TranslationRecord): void`：保存翻译记录。
- `getTranslationRecords(userId: String): List<TranslationRecord>`：获取指定用户的翻译记录列表。

#### 2 语言设置接口



<div align = "center">
    <img src="../pics/Interface_LanguageSetting.png" />
</div>


- `sourceLanguage: String`：源语言属性。
- `targetLanguage: String`：目标语言属性。
- `setSourceLanguage(sourceLanguage: String): void`：设置源语言。
- `setTargetLanguage(targetLanguage: String): void`：设置目标语言。
- `getSourceLanguage(): String`：获取源语言。
- `getTargetLanguage(): String`：获取目标语言。

#### 3 OCR翻译接口



<div align = "center">
    <img src="../pics/Interface_OCRTranslation.png" />
</div>


- `recognizeImage(image: ImageData, sourceLanguage: String, targetLanguage: String): String`：将图像数据识别为文本，并将其翻译成指定的目标语言。

#### 4 语音翻译接口



<div align = "center">
    <img src="../pics/Interface_Speech_Translation.png" />
</div>


- `recognizeSpeech(audio: AudioData, sourceLanguage: String, targetLanguage: String): String`：将音频数据识别为文本，并将其翻译成指定的目标语言。

#### 5 文本翻译接口



<div align = "center">
    <img src="../pics/Interface_TextTranslation.png" />
</div>


- `translateText(text: String, sourceLanguage: String, targetLanguage: String): String`：将指定的文本翻译成指定的目标语言。

#### 6 用户界面接口



<div align = "center">
    <img src="../pics/Interface_UserInterface.png" />
</div>


- `showTextInputBox(): void`：显示文本输入框。
- `showTranslationResult(text: String): void`：显示翻译结果。
- `showVoiceInputButton(): void`：显示语音输入按钮。
- `showOCRButton(): void`：显示 OCR 按钮。
- `showHistoryButton(): void`：显示历史记录按钮。
- `showVoiceAndCopy(): void`：显示语音合成和复制按钮。

#### 7 语音录入接口



<div align = "center">
    <img src="../pics/Interface_VoiceAndCopy.png" />
</div>


- `getVoice(text: String, targetLanguage: String): AudioData`：将指定的文本转换为语音，并返回音频数据。
- `copyText(text: String): void`：将指定的文本复制到剪贴板。

#### 8 页面控制接口

<div align = "center">
    <img src="../pics/Interface_PageController.png" />
</div>


- `+getToPage(page: String)`：表示该接口具有一个公共方法 `getToPage`，该方法接受一个参数 `page`，类型为 `String`，用于获取指定页面的内容。

#### 9 API信息配置接口

<div align = "center">
    <img src="../pics/Interface_API_Info_Config.png" />
</div>


- `-api_config: ApiConfig`：表示该接口具有一个私有属性 `api_config`，其类型为 `ApiConfig`。私有属性只能在该类内部访问。
- `+setApiConfig(api_config : ApiConfig)`：表示该接口具有一个公共方法 `setApiConfig`，该方法接受一个参数 `api_config`，类型为 `ApiConfig`，用于设置 `api_config` 的值。
- `+getApiConfig(): ApiConfig`：表示该接口具有一个公共方法 `getApiConfig`，该方法返回 `api_config` 的值，类型为 `ApiConfig`。

#### 10 翻译记录

<div align = "center">
    <img src="../pics/Class_TranslationRecord.png" />
</div>


- `userId: String`：用户 ID 属性。
- `sourceText: String`：源文本属性。
- `sourceLanguage: String`：源语言属性。
- `targetText: String`：目标文本属性。
- `targetLanguage: String`：目标语言属性。
- `timestamp: DateTime`：时间戳属性。
- `getUserId(): String`：获取用户 ID。
- `getSourceText(): String`：获取源文本。
- `getSourceLanguage(): String`：获取源语言。
- `getTargetText(): String`：获取目标文本。
- `getTargetLanguage(): String`：获取目标语言。
- `getTimestamp(): DateTime`: 获取时间戳。

### 3.3.3 系统流程分析


<div align = "center">
    <img src="../pics/UseCase.png" width = "40%"/>
</div>


结合上述用例图，我们得出以下的时序图：

#### 1 文本翻译时序图

<div align = "center">
    <img src="../pics/Sequence_Text_Translation.png" />
</div>


#### 2 拍照翻译时序图

<div align = "center">
    <img src="../pics/Sequence_OCR_Translation.png" />
</div>


#### 3 语音翻译时序图

<div align = "center">
    <img src="../pics/Sequence_Speech_Recognition.png" />
</div>


#### 4 语音合成时序图

<div align = "center">
    <img src="../pics/Sequence_Speech_Synthesis.png" />
</div>
​           

#### 5 查看翻译历史时序图

<div align = "center">
    <img src="../pics/Sequence_Get_Translation_History.png" />
</div>
# 4. 系统实现和测试

## 4.1 系统实现

> 开发语言：Html(Wxml) + Css(Wxss) + javascript；
>
> 开发框架：微信原生框架 + Less
>
> 开发环境：微信开发者工具 + Vscode

### 4.1.1 assets/

#### 4.1.1.1 assets/iconfont.wxss

这段代码在全局在全局引用了Iconfont的Icon图标。

```css
 @font-face {font-family: "iconfont";
  src: url('https://at.alicdn.com/t/font_811118_f7oh8iao9yd.ttf') format('truetype')
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-down:before { content: "\e600"; }

.icon-close:before { content: "\e78f"; }

.icon-arrow-right:before { content: "\e682"; }

.icon-duihao:before { content: "\e601"; }

.icon-right:before { content: "\e790"; }

```

### 4.1.2 components/

> 翻译组件介绍(语音翻译页面配置)

#### 4.1.2.1 components/bottom-button
> 录音按钮组


以下代码主要功能是：

1. 根据语言配置生成对应的录音按钮。
2. 当按下按钮时，开始录音，并将按钮样式改为按下状态。
3. 当松开按钮时，结束录音，并将按钮样式改回正常状态。
4. 当按钮被禁用时，修改按钮样式为禁用状态。

- **bottom-button.js**

```javascript
// 引入语言配置文件
import { language } from '../../utils/conf.js'

// 获取全局应用实例
let app = getApp();

// 获取全局按钮配置
let buttons = app.globalData.buttons;

// 根据语言配置生成按钮配置
language.forEach(item => {
  buttons.push({
    buttonText: item.lang_name, // 按钮文本
    lang: item.lang_content, // 按钮对应的语言
    lto: item.lang_to[0], // 目标语言
    msg: item.hold_talk, // 提示信息
    buttonType: 'normal', // 按钮类型
  })
})

// 按钮对应的背景图片
let buttonBackground = {
  zh_CN: {
    normal: '../../imgs/R.png',
    press: '../../imgs/R1.png',
    disabled: '../../imgs/R.png',
  },
  en_US: {
    normal: '../../imgs/R.png',
    press: '../../imgs/R1.png',
    disabled: '../../imgs/R.png',
  }
}

// 组件定义
Component({
  // 组件的属性列表
  properties: {
    // 按钮是否禁用
    buttonDisabled: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal) {
        let buttonType = newVal ? 'disabled' : 'normal'
        this.changeButtonType(buttonType)
      }
    },
  },

  // 组件的初始数据
  data: {
    buttons: buttons, // 按钮配置
    buttonBackground: buttonBackground, // 按钮背景图片
    currentButtonType: 'normal', // 当前按钮类型
  },

  // 组件的方法列表
  methods: {
    // 按下按钮开始录音
    streamRecord(e) {
      if (this.data.buttonDisabled) {
        return
      }
      // 先清空背景音
      wx.stopBackgroundAudio()

      let currentButtonConf = e.currentTarget.dataset.conf

      this.changeButtonType('press', currentButtonConf.lang)

      this.triggerEvent('recordstart', {
        buttonItem: currentButtonConf
      })
    },

    // 松开按钮结束录音
    endStreamRecord(e) {
      let currentButtonConf = e.currentTarget.dataset.conf

      this.triggerEvent('recordend', {
        buttonItem: currentButtonConf
      })
    },

    // 修改按钮样式
    changeButtonType(buttonType, buttonLang) {
      let tmpButtons = this.data.buttons.slice(0)

      tmpButtons.forEach(button => {
        if (!buttonLang || buttonLang == button.lang) {
          button.buttonType = buttonType
        }
      })

      this.setData({
        buttons: tmpButtons
      })
    },
  }
});

```
- **bottom-button.json**
```javascript
{
  "component": true
}
```
- **bottom-button.wxml**
```css
<!-- 按钮组容器，当hidden为true时隐藏 -->
<view class="button-wrap" hidden="{{hidden}}">
  <!-- 图片大容器 -->
  <view class="img-big-wrap">
    <!-- 按钮容器 -->
    <view class="button-container">
      <!-- 使用wx:for指令遍历buttons数组，生成对应的按钮 -->
      <view wx:for="{{buttons}}" wx:for-item="button" wx:key="lang" class="button-item">
        <view catchtouchstart="streamRecord"
               catchtouchend="endStreamRecord"
               data-conf="{{button}}"
               class="button-press">
          <image class="button-background" src="{{buttonBackground[button.lang][button.buttonType]}}"></image>
        </view>
      </view>
    </view>
  </view>
</view>
```
- **bottom-button.wxss**
```css
/* 按钮组容器样式，使用flex布局，内容居中 */
.button-wrap {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}

/* 图片大容器样式，宽度100%，使用flex布局，背景色为#1494fc */
.img-big-wrap {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  background: #1494fc;
}

/* 按钮容器样式，使用flex布局，高度100%，宽度100%，内容居中，底部外边距20px */
.button-container{
  display: flex;
  display: -webkit-flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items:flex-start;
  justify-content: center;
  margin-bottom: 20px;
  padding: 50rpx 0 38rpx 0;
  z-index: 1;
}

/* 按钮项样式，使用flex布局，方向为列，内容从上开始，居中对齐，宽度75px */
.button-item {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  align-items: center;
  -webkit-align-items: center;
  width: 75px;
  box-sizing: border-box;
  z-index: 2;
}

/* 按钮标签样式，字体大小28rpx，颜色#9B9B9B，字母间距0，上外边距15rpx */
.button-label {
  font-size: 28rpx;
  color: #9B9B9B;
  letter-spacing: 0;
  margin: 15rpx 0 0 0;
}

/* 按钮按下样式，位置相对，使用flex布局，高度150rpx，宽度100%，圆角100rpx，内容居中对齐 */
.button-press {
  position: relative;
  display: flex;
  display: -webkit-flex;
  height: 150rpx;
  width: 100%;
  border-radius: 100rpx;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -wekbit-align-items:center;
}

/* 按钮背景样式，位置相对，高度150rpx，宽度100%，左边距0，z-index为3 */
.button-background {
  position: relative;
  height: 150rpx;
  width: 100%;
  /* border-radius: 100rpx; */
  left: 0;
  z-index: 3;
}
```

#### 4.1.2.2 components/modal

工具组件

以下代码主要功能是：

1. 三个操作项：复制源文本、复制目标文本和删除条目。
2. 当点击复制源文本或复制目标文本时，会调用`setClip`

- **modal.js**
```javascript
// 导入语言配置
import { language } from '../../utils/conf.js'

// 获取第一种语言配置
const tips_language = language[0]

// 定义模态框中的操作项
let modalItems = [
    {
      type: 'copySource', // 复制源文本
      text: tips_language.copy_source_text
    },
    {
      type: 'delete', // 删除条目
      text: tips_language.delete_item
    },
    {
      type: 'copyTarget', // 复制目标文本
      text: tips_language.copy_target_text
    },
]

// 定义组件
Component({
  // 组件的属性列表
  properties: {
    // 条目数据
    item: {
      type: Object,
      value: {},
    },
    // 是否显示模态框
    modalShow: {
      type: Boolean,
      value: true,
    },
    // 条目索引
    index: {
      type: Number,
    },
  },

  // 组件的初始数据
  data: {
    modalItems: modalItems, // 模态框操作项
  },

  // 组件的方法列表
  methods: {
    // 删除条目并关闭模态框
    deleteBubbleModal: function() {
      this.triggerEvent('modaldelete', {
        item: this.data.item,
        index: this.data.index,
      },{ bubbles: true, composed: true })
      this.leaveBubbleModal()
    },

    // 点击操作项
    itemTap: function(e) {
      let itemType = e.currentTarget.dataset.type
      let item = this.data.item

      switch(itemType) {
        case 'copySource': // 复制源文本
          this.setClip(item.text)
          break;
        case 'copyTarget': // 复制目标文本
          this.setClip(item.translateText)
          break
        case 'delete': // 删除条目
          this.deleteBubbleModal()
          break
        default:
          break
      }
    },

    // 复制到剪贴板
    setClip: function(text) {
      wx.setClipboardData({
        data: text,
        success:  (res) => {
          this.leaveBubbleModal()
          wx.showToast({
            title: "已复制到剪切板",
            icon: "success",
            duration: 1000,
            success: function (res) {
              console.log("show succ");
            },
            fail: function (res) {
              console.log(res);
            }
          });
        }
      })
    },

    // 关闭模态框
    leaveBubbleModal: function() {
      this.triggerEvent('modalleave', {
        modalShow: this.data.modalShow
      })
    },
  }
});

```
- **modal.json**
```javascript
{
  "component": true
}
```
- **modal.wxml**
```css
<!-- 如果modalShow为true，则显示模态框 -->
<view wx:if="{{modalShow}}" style="height:100%;width:100%">
  <view class="modal-wrapper">
    <!-- 模态框的三角形部分 -->
    <view class="modal-triangle"></view>
    <!-- 模态框的主体部分，包含一些可点击的选项 -->
    <view class="menu-modal">
      <!-- 遍历modalItems数组，为每个选项创建一个视图元素 -->
      <view wx:for="{{modalItems}}" wx:key="type" class="menu-modal-item" data-type="{{item.type}}" bindtap="itemTap">{{item.text}}</view>
    </view>
  </view>
</view>
<!-- 如果modalShow为true，则显示一个透明的遮罩层，点击遮罩层可以关闭模态框 -->
<view wx:if="{{modalShow}}" class="modal-hidden" 	bindtouchstart="leaveBubbleModal"></view>
```
- **modal.wxss**
```css
/* 模态框容器样式 */
.modal-wrapper {
  position: relative;
  color: #FFFFFF;
  height: 70rpx;
  width: 80%;
  margin: 0 auto;
  z-index: 70;
  opacity: 0.9;
}

/* 模态框中三角形的样式 */
.modal-triangle {
  position: relative;
  margin: 0 auto;
  top: 28px;
  height: 0;
  width: 0;
  border: 5px solid #000000;
  transform: rotate(45deg);
}

/* 模态框隐藏状态的样式 */
.modal-hidden {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  opacity: 0;
  z-index: 69;
}

/* 模态菜单的样式 */
.menu-modal {
  height: 70rpx;
  font-size: 14px;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
}

/* 模态菜单项的样式 */
.menu-modal-item {
  color: #FFFFFF;
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  background-clip: content-box;
  background-color: #000000;
}

/* 第一个模态菜单项的样式，添加左上和左下的圆角 */
.menu-modal-item:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

/* 最后一个模态菜单项的样式，添加右上和右下的圆角 */
.menu-modal-item:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* 模态菜单项之间的分隔线样式 */
.menu-modal-item + .menu-modal-item {
  border-left: 1rpx solid #FFFFFF;
}

/* 模态菜单项被按下时的样式 */
.menu-modal-item:active {
  background-color: #9e9e9e;
}

```
#### 4.1.2.3 components/play-icon

播放加载组件

以下代码主要功能是：

1. 监听播放状态的变化，当播放状态从'loading'变为'playing'时，根据加载动画的播放次数和剩余的播放时间，决定是立即将播放状态设置为'playing'，还是等待剩余的播放时间后再将播放状态设置为'playing'。
2. 当播放状态变为'loading'时，记录加载开始的时间。

- **play-icon.js**
```javascript
// 加载图标的路径
const loadingIcon = '../../imgs/loading.gif'

Component({
  properties: {
    // 播放状态，可能的值有'wait'、'loading'和'playing'
    playType: {
      type: String,
      value: 'wait',
      // 当playType的值发生变化时，会触发这个函数
      observer: function(newVal, oldVal){
        // 当播放状态从'loading'变为'playing'时
        if(oldVal == 'loading' && newVal == 'playing') {
          // 加载动画的周期为1240ms
          let loadingTransitionTime = 1240;
          // 获取当前时间
          let nowTime = + new Date()
          // 获取加载开始的时间
          let loadingStartTime = this.data.loadingStartTime
          // 计算加载的时间
          let loadingTime = nowTime - loadingStartTime
          // 计算加载动画播放的完整次数
          let loadingCount = parseInt(loadingTime / loadingTransitionTime);
          // 计算加载动画剩余的播放时间
          let timeLeft = loadingTransitionTime - loadingTime % loadingTransitionTime;

          // 如果加载动画播放了至少一次，并且剩余的播放时间大于1秒
          if(loadingCount > 0 && timeLeft > 1000) {
            // 直接将播放状态设置为'playing'，并清空加载图标
            this.setData({
              realPlayType: newVal,
              loadingImg: '',
            })
          } else {
            // 否则，等待剩余的播放时间后，再将播放状态设置为'playing'
            setTimeout( ()=>{
              this.setData({
                realPlayType: newVal,
              })
            }, timeLeft)
          }
        } else if (newVal == 'loading'){
          // 当播放状态变为'loading'时，记录加载开始的时间，并将播放状态设置为'loading'
          this.setData({
            loadingStartTime: + new Date(),
            realPlayType: newVal,
          })
        } else {
          // 对于其他的播放状态，直接更新播放状态
          this.setData({
            realPlayType: newVal,
          })
        }
      },
    }
  },

  data: {
    // 实际在wxml中使用的播放状态
    realPlayType: 'wait',
    // 加载开始的时间
    loadingStartTime: 0,
  },

  ready: function () {
    // 组件准备就绪时执行的函数
  },

  detached: function() {
    // 组件被移除时执行的函数
  },

  methods: {
    // 组件的方法列表
  }
});
```
- **play-icon.json**
```javascript
{
  "component": true,
  "usingComponents": {
  }
}
```
- **play-icon.wxml**
```css
<!-- 主视图，包含音乐播放图标 -->
<view class="play-loud-icon">
  <!-- 根据播放状态显示或隐藏的主播放图标 -->
  <image src="../../imgs/play_loud.png" class="play-loud-img play-icon-main {{realPlayType == 'loading' ? 'is-hide' : ''}}" ></image>

  <!-- 当播放状态不是'loading'时，以下内容生效 -->
  <block wx:if="{{realPlayType != 'loading'}}">

    <!-- 当播放状态是'playing'时，显示动画效果 -->
    <block wx:if="{{realPlayType=='playing'}}">
        <image src="../../imgs/play_loud_1.png" class="play-loud-img play-animation" ></image>
        <image src="../../imgs/play_loud_2.png" class="play-loud-img play-animation1"></image>
    </block>

    <!-- 当播放状态不是'playing'时，显示静态图标 -->
    <block wx:else>
        <image src="../../imgs/play_loud_1.png" class="play-loud-img"></image>
    </block>
  </block>

  <!-- 当播放状态是'loading'时，显示过渡效果 -->
  <block wx:else="{{realPlayType != 'loading'}}">
    <view class="play-transition"></view>
  </block>
</view>
```
- **play-icon.wxss**
```css
/* 容器的样式 */
.play-loud-icon {
  position: relative;
  height: 40rpx;
  width: 40rpx;
}

/* 音乐播放图标的样式 */
.play-loud-img {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40rpx;
  width: 40rpx;
}

/* 主播放图标的过渡效果 */
.play-icon-main {
  transition: all .2s ease-out;
}

/* 加载状态的图标样式 */
.play-loading-img {
  position: absolute;
  height: 40rpx;
  width: 40rpx;
  left: -1rpx;
  top: 0rpx;
}

/* 隐藏元素的样式 */
.is-hide {
  opacity: 0;
}

/* 过渡效果的样式，采用背景图base64实现 */
.play-transition {
  position: absolute;
  height: 40rpx;
  width: 40rpx;
  background: transparent url(...) no-repeat;
  background-size: 40rpx 40rpx;
  left: -1rpx;
  top: 0rpx;
}

/* 音乐播放动画的共享样式 */
.play-animation,
.play-animation1 {
  -webkit-animation-delay: 200ms;
  animation-delay: 200ms;
  -webkit-animation: tranOpacity 1200ms ease-in-out infinite;
  animation: tranOpacity 1200ms ease-in-out infinite;
}

/* 音乐播放动画1的样式 */
.play-animation {
  -webkit-animation-name: tranOpacity;
  animation-name: tranOpacity;
}

/* 音乐播放动画2的样式 */
.play-animation1 {
  -webkit-animation-name: tranOpacity1;
  animation-name: tranOpacity1;
}

/* 动画1的关键帧定义 */
@-webkit-keyframes tranOpacity {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes tranOpacity {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

/* 动画2的关键帧定义 */
@-webkit-keyframes tranOpacity1 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes tranOpacity1 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

```
#### 4.1.2.4 components/result-bubble

翻译框组件

以下代码主要功能是：
1. 接收一个对象item作为输入，该对象包含文本信息以及音频路径等数据。
2. 根据item对象中的数据，触发文字的翻译，并且播放翻译后的音频。
3. 提供了一些界面操作，例如弹出和关闭模态框，以及触发播放和停止音频的操作。

- **result-bubble.js**
```javascript
// 引入语言配置
import { language } from '../../utils/conf.js'

// 定义一个组件
Component({
  // 定义组件的属性
  properties: {
    // 属性:item，类型:Object，观察函数进行数据监听
    item: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {
        // 当记录状态为2（翻译完成），且文本有变化，触发重新翻译事件
        if(this.data.recordStatus == 2 && oldVal.text && oldVal.text != '' && newVal.text != oldVal.text) {
          this.triggerEvent('translate', {
            item: this.data.item,
            index: this.data.index,
          })
        }
        // 翻译内容改变触发音频播放，或者结束播放动画
        if(newVal.autoPlay && newVal.translateVoicePath != oldVal.translateVoicePath){
          this.autoPlayTranslateVoice()
        } else if(newVal.translateVoicePath == "") {
          this.playAnimationEnd()
        }
      }
    },
    // 编辑界面展示标志
    editShow: {
      type: Boolean,
      value: false,
    },
    // 项目索引
    index: {
      type: Number,
    },
    // 当前翻译的音频路径
    currentTranslateVoice: {
      type: String,
      observer: function(newVal, oldVal){
        if(newVal != '' && newVal != this.data.item.translateVoicePath) {
          this.playAnimationEnd()
        }
      },
    },
    // 记录状态：0-正在识别，1-正在翻译，2-翻译完成
    recordStatus: {
      type: Number,
      value: 2, 
    },
  },

  // 定义组件的内部数据
  data: {
    // 语言类型
    tips_language: language[0], 

    // 是否显示模态框
    modalShow: false,

    // 语音播放状态
    playType: 'wait',

    // 待定义动画
    waiting_animation: {},
    waiting_animation_1: {},

    // 编辑图标路径
    edit_icon_path: '../../imgs/edit.png'
  },

  // 组件生命周期函数-在组件布局完成后执行
  ready: function () {
    if(this.data.item.autoPlay) {
      this.autoPlayTranslateVoice()
    }
  },

  // 组件生命周期函数-在组件实例被从页面节点树移除时执行
  detached: function() {
    // console.log("detach")
  },

  // 定义方法
  methods: {
    // 显示模态框
    showModal: function() {
      this.setData({modalShow: true})
    },

    // 离开模态框
    modalLeave: function() {
      this.setData({modalShow: false})
    },

    // 点击播放图标，根据播放状态和音频过期时间，来决定播放，停止还是触发过期事件
    playTranslateVoice: function() {
      let nowTime = parseInt(+ new Date() / 1000)
      let voiceExpiredTime = this.data.item.translateVoiceExpiredTime || 0

      if(this.data.playType == 'playing') {
        wx.stopBackgroundAudio()
        this.playAnimationEnd()
      } else if(nowTime < voiceExpiredTime) {
        this.autoPlayTranslateVoice()
      } else {
        this.setData({
          playType: 'loading',
        })
        this.triggerEvent('expired', {
          item: this.data.item,
          index: this.data.index,
        })
      }
    },

    // 自动播放翻译后的音频，音频播放结束后，会结束播放动画
    autoPlayTranslateVoice: function (path,index) {
      let play_path = this.data.item.translateVoicePath

      if(!play_path) {
        console.warn("no translate voice path")
        return
      }

      wx.onBackgroundAudioStop(res => {
        console.log("play voice end",res)
        this.playAnimationEnd()
      })

      this.playAnimationStart()

      wx.playBackgroundAudio({
        dataUrl: play_path,
        title: '',
        success: (res) => {
          this.playAnimationStart()
        },
        fail: (res) => {
            console.log("failed played", play_path);
            this.playAnimationEnd()
        },
        complete: function (res) {
            console.log("complete played");
        }
      })
    },

    // 开始播放动画
    playAnimationStart: function() {
      this.setData({
        playType: 'playing',
      })
    },

    // 结束播放动画
    playAnimationEnd: function() {
        this.setData({
          playType: 'wait',
        })
    },
  }
});

```
- **result-bubble.json**
```javascript
{
  "component": true,
  "usingComponents": {
    "modal": "/components/modal/index",
    "waiting-icon": "/components/waiting-icon/index",
    "play-icon": "/components/play-icon/index"
  }
}
```
- **result-bubble.wxml**
```css
<!-- 消息气泡容器，长按显示模态框 -->
<view class="bubble-wrap" bindlongpress="showModal" >
  <!-- 模态框容器，当状态为2（翻译完成）时显示 -->
  <view class="modal-wrap" wx:if="{{recordStatus == 2}}">
    <!-- 模态框组件 -->
    <modal 
      modal-show="{{modalShow}}"   <!-- 控制模态框显示隐藏 -->
      index="{{index}}"             <!-- 项目索引 -->
      item="{{item}}"               <!-- 当前项目 -->
      bindmodalleave="modalLeave">  <!-- 模态框离开事件处理函数 -->
    </modal>
  </view>
  
  <!-- 创建时间显示 -->
  <view class="create-time">{{item.create}}</view>
  
  <!-- 消息内容区域 -->
  <view class="section-body" data-index="{{index}}" >
    <!-- 发送消息区域 -->
    <view class="send-message">
      <!-- 消息文本内容 -->
      <view data-id="{{item.id}}"  class="text-content"  data-index="{{index}}" >
        <!-- 消息详情 -->
        <view class="text-detail  text-detail-{{item.lfrom}}" >
          <!-- 消息文本 -->
          {{item.text}}
          <!-- 若正在识别（状态为0），则显示等待图标 -->
          <waiting-icon wx:if="{{recordStatus == 0}}"></waiting-icon>
        </view>
      </view>
      
      <!-- 编辑图标，点击进入编辑页面 -->
      <navigator
        hover-class="navigator-hover"
        data-text="{{item.text}}"
        data-id="{{item.id}}"
        data-index="{{index}}"
        class="edit-icon"
        wx:if="{{editShow}}"
        data-item="{{item}}"
        url="{{'/pages/edit/edit?content='+item.text+'&index='+index}}">
          <!-- 编辑图标图片 -->
          <image class="edit-icon-img" src="{{edit_icon_path}}" ></image>
      </navigator>
    </view>
    
    <!-- 若正在翻译（状态大于0），显示分割线 -->
    <view class="line-between"  wx:if="{{recordStatus > 0}}"></view>
    
    <!-- 翻译后的消息区域 -->
    <view class="translate-message" >
      <!-- 消息文本内容 -->
      <view class="text-content">
        <!-- 消息详情 -->
        <view class="text-detail text-detail-{{item.lto}}">
          <!-- 翻译后的文本 -->
          {{item.translateText}}
          <!-- 若正在翻译（状态为1），则显示等待图标 -->
          <waiting-icon wx:if="{{recordStatus == 1}}"></waiting-icon>
        </view>
      </view>
      
      <!-- 若翻译完成（状态为2），显示播放图标，点击播放翻译音频 -->
      <view class="play-icon" catchtap="playTranslateVoice" catchtouchstart="playTranslateVoice" wx:if="{{recordStatus == 2

```
- **result-bubble.wxss**
```css
/* 消息气泡容器 */
.bubble-wrap {
  position: relative;
}

/* 等待点样式 */
.wait-point {
  display:inline-block;
  width:6px;
  height:6px;
  border-radius:3px;
  background-color: #ddd;
  margin: 0 2px;
}

/* 加载状态样式 */
.loading {
  position: relative;
}

/* 分割线样式 */
.line-between {
  height: 1px;
  width: 100%;
  background: #F1F1F1;
  overflow: hidden;
  margin: 30rpx 0;
}

/* 创建时间文本样式 */
.create-time {
  font-size:28rpx;
  color: #B2B2B2;
  margin-bottom:10px;
  display: flex;
  justify-content: center;
}

/* 消息内容区域样式 */
.section-body{
  word-wrap: break-word;
  border-radius: 10px;
  position: relative;
  width:100%;
  background: #FFFFFF;
  box-shadow: 0 2px 16px 2px rgba(0,0,0,0.03);
  padding:50rpx 60rpx;
  box-sizing: border-box;
  min-height: 260rpx;
}

/* 消息详情文本样式 */
.text-detail {
  font-size: 36rpx;
  line-height: 1.231;
  vertical-align: text-bottom;
  box-sizing: border-box;
  font-family: "PingFang-SC-Regular","SimSun","Microsoft Yahei";
}

/* 英文和中文消息详情样式 */
.text-detail-en_US {
  line-height: 1.231;
}
.text-detail-zh_CN {
  line-height: 1.41;
}

/* 发送和翻译消息样式 */
.translate-message,
.send-message {
  position: relative;
  padding: 0 2px;
}
.send-message .text-detail {
  color: #9B9B9B;
}

/* 编辑图标样式 */
.edit-icon {
  position: absolute;
  display: flex;
  align-items: center;
  right: 8rpx;
  bottom: 7rpx;
  padding: 0 8rpx;
}
.edit-icon-img {
  width:40rpx;
  height:40rpx;
}

/* 播放图标样式 */
.play-icon {
  position: absolute;
  right: 3rpx;
  bottom: 7rpx;
  padding: 0 8rpx;
  display: flex;
  align-items: center;
}

/* 编辑和播放图标点击范围扩大 */
.edit-icon::before,
.play-icon::before {
  content:"";
  position:absolute;
  top:-10rpx;
  left:-10rpx;
  bottom:-10rpx;
  right:-10rpx;
}

/* 消息文本内容样式 */
.text-content {
  margin: 0 48px 0 0;
  box-sizing: border-box;
}

/* 模态框容器样式 */
.modal-wrap {
  position: absolute;
  width: 100%;
  box-sizing:border-box;
}

/* 重置navigator样式 */
.navigator-hover {
  background-color: #fff;
}
```
#### 4.1.2.5 components/waiting-icon

等待加载组件

以下代码主要功能是：

1. 控制等待动画的开始，停止
2. 设置等待动画的间隔

- **waiting-icon.js**
```javascript
// 定义小程序组件
Component({
  properties: {
    // 这里定义了组件的属性
  },

  // 组件的初始数据
  data: {
    waiting_animation: {},     // 定义等待动画对象
    waiting_animation_1: {},   // 定义另一个等待动画对象
  },

  // 组件的生命周期函数，在组件布局完成后执行
  ready: function () {
    console.log("ready waitting")

    // 创建两个等待动画，一个持续600毫秒，一个持续400毫秒
    this.waiting_animation = wx.createAnimation({
      duration: 600
    })
    this.waiting_animation_1 = wx.createAnimation({
      duration: 400
    })

    // 设置动画循环
    this.setWaitInterval()
  },

  // 组件生命周期函数，在组件实例被从页面节点树移除时执行
  detached: function() {
    // 当组件被移除时，清除动画
    this.clearAnimation()
  },

  methods: {
    // 清除动画的函数
    clearAnimation: function() {
      this.endWaitAnimation()
    },

    // 结束动画的函数，将清除循环，并重置动画对象
    endWaitAnimation: function() {
      clearInterval(this.data.waiting_interval)
      this.setData({ waiting_animation : {}})
      this.setData({ waiting_animation_1: {} })
    },

    // 开始动画的函数，设置动画的参数并启动动画
    startWaitAnimation: function () {
      this.waiting_animation.opacity(0).scale(1.2, 1.2).step()
      this.waiting_animation.opacity(1).scale(1, 1).step()
      this.setData({ waiting_animation: this.waiting_animation.export() })

      this.waiting_animation_1.opacity(0).scale(1.2, 1.2).step()
      this.waiting_animation_1.opacity(1).scale(1, 1).step()
      this.setData({ waiting_animation_1: this.waiting_animation_1.export() })
    },

    // 设置动画循环的函数，将清除并重新启动动画循环
    setWaitInterval: function() {
      this.endWaitAnimation()

      // 创建一个新的循环，每600毫秒启动一次动画
      this.data.waiting_interval = setInterval( ()=>{
        this.startWaitAnimation()
      },600 )
    },
  }
});

```
- **waiting-icon.json**
```javascript
{
  "component": true,
  "usingComponents": {
  }
}

```
- **waiting-icon.wxml**
```css
<view class="loading">
  <view    class="loading-icon">.</view>
  <view animation="{{waiting_animation}}" class="loading-icon">.</view>
  <view animation="{{waiting_animation_1}}" class="loading-icon">.</view>
</view>
```
- **waiting-icon.wxss**
```css

.loading {
  position: relative;
  display: inline;
}

.loading-icon {
  display: inline;
}

```
### 4.1.3 imgs/

包含微信小程序内部需要用到的静态图片。

### 4.1.4 pages/

#### 4.1.4.1 pages/choose_language

切换翻译语言的页面，该页面包含两个语言列表，分别代表源语言和目标语言，用户可以通过点击列表中的项来选择语言。选择的语言信息会被保存到本地存储和全局变量中，并在页面显示时更新。

##### 1 choose_language.js
```javascript
// 获取全局应用实例
const app = getApp()

// 导入工具函数
const util = require('../../utils/util.js')

// 定义页面
Page({
  // 页面初始数据
  data: {
    // 语言列表，每一种语言包含一个图像、语言名称、音频等信息
    list_aPbtoDn5: [
      {
        "image":"...", "text": "中文", 'chs': '中文', 'lang': 'zh', 'sound':'zh_CN'
      },
      {
        "image":"...", "text": "英语", 'chs': '英文', 'lang': 'en', 'sound':'en_US'
      },
      {
        "image":"...", "text": "德语", 'chs': '德语', 'lang': 'de'
      },
      {
        "image":"...", "text": "韩语", 'chs': '韩语', 'lang': 'kor'
      }
    ],
    selectedIndex1: null, // 记录第一次选择的语言的索引
    selectedIndex2: null, // 记录第二次选择的语言的索引
    isClicked1: false,    // 是否已经完成第一次点击
    isClicked2: false,    // 是否已经完成第二次点击
    langList: app.globalData.langList, // 全局语言列表
    curLang: {},          // 当前语言
    fromLang: {},
    targetLang: {},       // 目标语言
    currentsound:'',      // 当前语音
  },

  // 页面分享功能
  onShareAppMessage() {
    return {};
  },

  // 处理第一次点击
  handleTap1: function() {
    this.setData({
      isClicked1: false,
      isClicked2: false,
    });
  },

  // 处理第二次点击
  handleTap2: function() {
    this.setData({
      isClicked2: true,
      isClicked1: true,
    });
  },

  // 处理点击事件，获取点击的语言信息，并保存到对应的数据中
  handleTap: function(e) {
    let langObj = e.currentTarget.dataset
    var index = langObj.index;
    var sound =langObj.sound;
    console.log("Clicked item index and sound : ", index,sound);
    if (!this.data.isClicked1) {
      this.setData({
        selectedIndex1: index,
        fromLang: langObj 
      });
      app.globalData.fromLang = langObj
    }else{
      this.setData({
        selectedIndex2: index,
        targetLang: langObj,
        currentsound:sound
      });
      // 把当前的语言和音频信息保存到本地存储中
      wx.setStorageSync('currentsound', this.data.currentsound);
      wx.setStorageSync('language', langObj)

      // 把当前的语言保存到全局变量中
      this.setData({ 'curLang': langObj })
      app.globalData.curLang = langObj
    }
    console.log("Selected item: ", this.data.curLang, this.data.targetLang);
  },

  // 当页面显示时，更新当前语言信息
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })
  },
});

```
##### 2 choose_language.json
```javascript
{
  "usingComponents": {}
}
```
##### 3 choose_language.wxml

该段代码的主要功能是显示一个语言列表，用户可以通过点击来选择“翻译语言”和“目标语言”。选择的语言会以不同的样式显示，以区分当前

```css
<!-- 页面主体是一个垂直方向的 flex 布局 -->
<view class="flex-col page space-y-44">
  <!-- 头部区域是一个水平的 flex 布局 -->
  <view class="flex-row items-center group space-x-8">
    <!-- 点击图片，会导航到首页 -->
    <navigator url="../../pages/index/index" open-type="redirect" style="display: inline-block">
      <image class="image" src="..." />
    </navigator>
    <!-- 头部文字提示 -->
    <text class="text">选择语言</text>
  </view>
  
  <!-- 内容区域也是一个垂直方向的 flex 布局 -->
  <view class="flex-col group_2 space-y-30">
    <!-- 包含两个选项：翻译语言和目标语言 -->
    <view class="flex-row space-x-15">
      <view class="flex-row {{isClicked1 ? 'text-wrapper_2' : 'text-wrapper'}}" bindtap="handleTap1">
        <text class="font_1 {{isClicked1 ? 'text_2' : 'text_3'}}">翻译语言</text>
      </view>
      <view class="flex-row {{isClicked2 ? 'text-wrapper' : 'text-wrapper_2'}}" bindtap="handleTap2">
        <text class="font_1 {{isClicked1 ? 'text_3' : 'text_2'}}">目标语言</text>
      </view>
    </view>

    <!-- 语言列表区域 -->
    <view class="flex-col space-y-18">
      <text class="self-start font_2 text_4">全部语言</text>
      <!-- 遍历语言列表，生成每一项 -->
      <view class="flex-col space-y-16">
        <view
          class="flex-row items-center {{selectedIndex1 == i && isClicked1 == false || selectedIndex2 == i && isClicked1 == true ? 'list-item' : 'list-item_2'}} space-x-24"
          wx:for="{{list_aPbtoDn5}}"
          wx:key="index"
          wx:for-item="item"
          wx:for-index="i"
          data-chs="{{item.chs}}" 
          data-lang="{{item.lang}}"
          data-index="{{i}}"
          data-src="{{item.image}}"
          data-sound="{{item.sound ? item.sound : 'en_US'}}"
          bindtap="handleTap"
        >
          <!-- 语言图标 -->
          <image class="image_2" src="{{item.image}}"/>
          <!-- 语言名称 -->
          <text class="{{selectedIndex1 == i && isClicked1 == false || selectedIndex2 == i && isClicked1 == true ? 'text_5' : 'text_6'}} ">{{item.text}}</text>
        </view>
      </view>
    </view>
  </view>
</view>

```
##### 4 choose_language.wxss
```css
/* 页面样式，包含内边距，背景色，宽度，溢出处理等样式 */
.page {
  padding: 72rpx 0 264rpx;
  background-color: #f8f8f9;
  border-radius: 40rpx;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

/* 处理间距类 .space-y-44 的子元素之间的垂直间距 */
.space-y-44 > view:not(:first-child),
.space-y-44 > text:not(:first-child),
.space-y-44 > image:not(:first-child) {
  margin-top: 88rpx;
}

/* 处理类 .group 的内边距 */
.group {
  padding: 0 16rpx;
}

/* 处理间距类 .space-x-8 的子元素之间的水平间距 */
.space-x-8 > view:not(:first-child),
.space-x-8 > text:not(:first-child),
.space-x-8 > image:not(:first-child) {
  margin-left: 16rpx;
}

/* 图片样式，包括宽高设置 */
.image {
  width: 48rpx;
  height: 48rpx;
}

/* 文本样式，包含字体，颜色，大小等 */
.text {
  color: #1e3163;
  font-size: 36rpx;
  font-family: Poppins;
  font-weight: 700;
  line-height: 34rpx;
}

/* 处理类 .group_2 的内边距 */
.group_2 {
  padding: 0 48rpx;
}

/* 处理间距类 .space-y-30 的子元素之间的垂直间距 */
.space-y-30 > view:not(:first-child),
.space-y-30 > text:not(:first-child),
.space-y-30 > image:not(:first-child) {
  margin-top: 60rpx;
}

/* 处理间距类 .space-x-15 的子元素之间的水平间距 */
.space-x-15 > view:not(:first-child),
.space-x-15 > text:not(:first-child),
.space-x-15 > image:not(:first-child) {
  margin-left: 80rpx;
}

/* 定义文本容器样式，包括内边距、背景颜色、圆角半径、阴影、高度、边框和宽度等 */
.text-wrapper {
  display: inline;
  padding: 28rpx 85rpx 40rpx 85rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  filter: drop-shadow(0px 0px 1rpx #0000000a, 0px 0px 2rpx #0000000f, 0px 8rpx 8rpx #0000000a);
  height: 50rpx;
  border: solid 2rpx #0064e1;
  width :40%;
}

/* 定义文本容器2的样式，包括内边距、背景颜色、圆角半径、高度、边框和宽度等 */
.text-wrapper_2 {
  display: inline;
  padding: 28rpx 85rpx 40rpx 85rpx;
  flex: 1 1 310rpx;
  border-radius: 16rpx;
  height: 50rpx;
  border: solid 2rpx #a7a7a7;
  width: 40%;
}

/* 定义字体样式，包括字体大小、字体系列和行高 */
.font_1 {
  font-size: 28rpx;
  font-family: Poppins;
  line-height: 26rpx;
}

/* 定义文本样式，包括颜色、字体权重、背景图像 */
.text_3 {
  color: transparent;
  font-weight: 700;
  background-image: linear-gradient(180deg, #0064e1 0%, #0845c2 100%);
  -webkit-background-clip: text;
}

/* 定义文本2的样式，颜色为灰色 */
.text_2 {
  color: #a8a8a8;
}

/* 设置间距类 .space-y-18 的子元素之间的垂直间距 */
.space-y-18 > view:not(:first-child),
.space-y-18 > text:not(:first-child),
.space-y-18 > image:not(:first-child) {
  margin-top: 36rpx;
}

/* 定义字体2的样式，包括字体大小、字体系列、行高和颜色 */
.font_2 {
  font-size: 32rpx;
  font-family: Poppins;
  line-height: 29rpx;
  color: #1e3163;
}

/* 定义文本4的样式，字体权重为700，行高为30rpx */
.text_4 {
  font-weight: 700;
  line-height: 30rpx;
}

/* 设置间距类 .space-y-16 的子元素之间的垂直间距 */
.space-y-16 > view:not(:first-child),
.space-y-16 > text:not(:first-child),
.space-y-16 > image:not(:first-child) {
  margin-top: 32rpx;
}

/* 定义图片2的样式，包括宽度和高度 */
.image_2 {
  width: 64rpx;
  height: 64rpx;
}

/* 定义文本5的样式，包括颜色、字体大小、字体系列、字体权重和行高 */
.text_5 {
  color: #ffffff;
  font-size: 35rpx;
  font-family: Poppins;
  font-weight: 700;
  line-height: 30rpx;
}

/* 设置文本6的上边距 */
.text_6 {
  margin-top: 10rpx;
}

/* 设置间距类 .space-x-24 的子元素之间的水平间距 */
.space-x-24 > view:not(:first-child),
.space-x-24 > text:not(:first-child),
.space-x-24 > image:not(:first-child) {
  margin-left: 48rpx;
}

/* 定义列表项样式，包括内边距、背景颜色、圆角半径和阴影等 */
.list-item {
  padding: 32rpx;
  background-color: #1392fb;
  border-radius: 16rpx;
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
}

/* 定义列表项2的样式，包括内边距、背景颜色、圆角半径和阴影等 */
.list-item_2 {
  padding: 32rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
}
```

#### 4.1.4.2 pages/edit

编辑文本的输入框页面，编辑文本的最大长度限制为200个字符，页面数据中的`edit_text`字段存储输入的文本，`remain_length`字段存储剩余可输入的字符数。

当用户在输入框中输入或删除文本时，页面会更新剩余可输入的字符数并显示给用户。当用户提交输入文本时，如果文本长度超过0且与旧文本不相同，页面会将新文本保存到上一页面的对话列表中，并返回上一页面；否则，如果用户提交的文本为空，页面会提供相应的处理。

##### 1 edit.js
```javascript
//初始化底部高度
const initBottomHeight = 0

var app = getApp()

Page({
  // 页面的初始数据
  data: {
    edit_text_max: 200,     //最大编辑文本长度
    remain_length: 200,     //剩余可输入长度
    edit_text: "",          //编辑文本内容
    is_focus: false,        //是否聚焦
    tips: "",               //提示信息
    index: -1,              //索引
    bottomHeight:  initBottomHeight  //底部高度
  },

  // 获取最大编辑文本长度
  getEditTextMax: function () {
    return this.data.edit_text_max
  },

  // 更新剩余可输入长度
  updateRemainLength: function (now_content) {
    this.data.remain_length = this.getEditTextMax() - now_content.length
    this.data.tips = "还可以输入" + this.data.remain_length + "字..."
    this.setData({ tips: this.data.tips })
  },

  // 设置编辑文本内容
  setEditText: function (text) {
    this.data.edit_text = text
    this.setData({ edit_text: this.data.edit_text })
    // 更新剩余长度显示
    this.updateRemainLength(text)
    this.setData({ is_focus: true })
  },

  // bindinput事件处理
  editInput: function (event) {
    console.log(event)
    if (event.detail.value.length > this.getEditTextMax()) {
      //处理输入内容超过最大长度的情况
    } else {
      this.data.edit_text = event.detail.value
      this.updateRemainLength(this.data.edit_text)
    }
  },

  // bindconfirm事件处理
  editConfirm: function (event) {
    if (this.data.edit_text.length > 0 && this.data.edit_text != this.data.oldText) {
      // 获取页面栈
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];  //上一个页面
      let dialogList = prevPage.data.dialogList.slice(0)
      let editItem = dialogList[dialogList.length - 1]
      editItem.text = this.data.edit_text

      prevPage.setData({
        dialogList: dialogList,
        recordStatus: 2,
      })
      wx.navigateBack()
    } else {
      // 处理输入文本为空的情况
    }
  },

  // 点击输入框时改变底部按钮的高度，使得提示和按钮始终在键盘上方
  editFocus: function(e) {
    let {value, height} = e.detail
    console.log(value, height)

    if(!isNaN(height)) {
      this.setData({
        bottomHeight: height + initBottomHeight
      })
    }
  },

  // 输入框失去焦点事件处理
  editBlur: function() {
    this.setData({
      bottomHeight: initBottomHeight
    })
  },

  // 清空内容事件处理
  deleteContent: function () {
    this.setEditText("")
    this.setData({
      is_focus: true
    })
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.setEditText(options.content)
    let index = parseInt(options.index)
    this.setData({
        index: index,
        oldText: options.content,
    })
  },
})
```
##### 2 edit.json
```javascript
{}
```
##### 3 edit.wxml
```css
<!-- edit.wxml -->
<!-- 定义了一个编辑文本的页面 -->
<view class="container edit-container">

  <!-- 编辑区域，使用textarea组件 -->
  <textarea 
    maxlength="{{edit_text_max}}"        <!-- 设置最大输入长度 -->
    class="edit_textarea"                <!-- 指定样式 -->
    auto-focus="{{true}}"                 
    focus="{{is_focus}}"                  
    bindinput="editInput"                <!-- 绑定输入事件 -->
    bindconfirm="editConfirm"            <!-- 绑定确定事件 -->
    value="{{edit_text}}"                <!-- 显示的文本 -->
    adjust-position="{{true}}"           <!-- 自动调整输入框位置 -->
    bindfocus="editFocus"                
    bindblur="editBlur">                  
  </textarea>

  <!-- 底部区域，显示提示和删除按钮 -->
  <view class="bottom-wrap" style="padding-bottom: {{bottomHeight}}px">
    <view class="tips-wrapper">
      <!-- 显示提示信息 -->
      <text class="edit-tips">{{tips}}</text>
      <!-- 删除按钮 -->
      <view class="delete-content" capture-bind:tap="deleteContent">
        <!-- 使用图片作为删除按钮的图标 -->
        <image src="../../imgs/delete_all.png" class="img-delete-all"></image>
      </view>
    </view>
  </view>
</view>

```
##### 3 edit.wxss
```css
/* pages/edit/edit.wxss */

/* 容器样式 */
.edit-container {
  position: relative;
  padding: 20px 50rpx 20rpx;          /* 内边距设置 */
  justify-content: flex-start;         /* 子元素沿主轴的对齐方式 */
  -webkit-justify-content: flex-start; /* WebKit内核的浏览器兼容设置 */
  background-color: #FAFAFA;           /* 背景色 */
}

/* 文本输入框样式 */
.edit_textarea {
  flex: 1;                             /* 弹性布局比例设置 */
  width: 100%;                         /* 宽度100% */
  box-sizing: border-box;              /* 设置盒模型 */
  font-size: 36rpx;                    /* 字体大小 */
  line-height: 60rpx;                  /* 行高 */
}

/* 底部提示和删除按钮容器样式 */
.tips-wrapper {
  width: 100%;                         /* 宽度100% */
  display: flex;                       /* 使用弹性布局 */
  display: -webkit-flex;               /* WebKit内核的浏览器兼容设置 */
  justify-content: space-between;      /* 子元素之间的间距均匀分布 */
  -webkit-justify-content: space-between; /* WebKit内核的浏览器兼容设置 */
  padding: 0;                          /* 内边距设置 */
  box-sizing: border-box;              /* 设置盒模型 */
  align-items: center;                 /* 子元素沿交叉轴的对齐方式 */
  -webkit-align-items: center;         /* WebKit内核的浏览器兼容设置 */
}

/* 提示文字样式 */
.edit-tips {
  font-size: 30rpx;                    /* 字体大小 */
  color: #B2B2B2;                      /* 字体颜色 */
  line-height: 50rpx;                  /* 行高 */
}

/* 删除按钮图标样式 */
.img-delete-all {
  height: 32rpx;                       /* 高度 */
  width: 28rpx;                        /* 宽度 */
}

/* 删除按钮容器样式 */
.delete-content {
  position: relative;                  /* 定位方式 */
  right: -20rpx;                       /* 向右偏移 */
  padding: 20rpx 20rpx;                /* 内边距设置 */
}
```

#### 4.1.4.3 pages/getPic

##### 1 getPic.js

这段代码的主要功能是：

1. 拍照：用户可以点击按钮触发`takeShot`方法，调用微信的摄像头接口进行拍照，拍照成功后，会将图片转换为base64格式，并保存到全局变量中，然后跳转到OCR页面。
2. 提示：用户可以点击按钮触发`onTap`方法，显示一个“只支持中译英”的提示。

```javascript
// 引入api模块，该模块可能包含了一些工具函数
var api = require("../../utils/api.js");

// 获取全局的app实例
const app = getApp();

// 定义一个页面
Page({
  // 页面的初始数据
  data: {

  },

  // 定义一个方法，用于拍照
  takeShot: function () {
    // 创建一个摄像头的上下文
    const ctx = wx.createCameraContext()

    // 使用上下文来拍照
    ctx.takePhoto({
      // 设置图片质量为高
      quality: 'high', // 上传图片进行文字提取时，图片转换为base64后，大小不能超过300k

      // 拍照成功后的回调函数
      success: (res) => {
        // 打印图片的临时地址
        console.log("图片的临时地址为：" + res.tempImagePath);

        // 调用api模块的getPicBase64函数，将图片转换为base64格式
        api.getPicBase64(res.tempImagePath).then(function (res) {
          // 将转换后的base64图片保存到全局数据中
          app.globalData.picBase64 = res.data;

          // 导航到OCR页面
          wx.navigateTo({
            url: '../OCR/OCR',
          })
        })
      }
    })
  },

  // 定义一个方法，用于显示提示
  onTap: function () {
    // 显示一个只支持中译英的提示
    wx.showToast({
      title: '只支持中译英',
      icon: "error"
    })
  }
})
```

##### 2 getPic.json

缺省代码。

```json
{
  "usingComponents": {}
}
```

##### 3 getPic.wxml

这段代码的主要功能是：

1. 头部视图：包含了一个语言切换视图，用户可以点击中文或英文图标和文字来切换语言。
2. 摄像头视图：显示一个摄像头，用户可以通过这个摄像头来拍照。
3. 工具栏视图：包含了一个拍照图标，用户可以点击这个图标来拍照。

```html
<!-- 头部视图 -->
<view class="head">
  <!-- 语言切换视图，点击时触发onTap事件 -->
  <view class="language" bindtap="onTap">
    <!-- 中文图标，点击时触发onTap事件 -->
    <image bindtap="onTap" class="language_pic" src="../../imgs/Chinese.png" />
    <!-- 中文文字，点击时触发onTap事件 -->
    <text bindtap="onTap" class="language_text" decode>&nbsp;中文</text>
    <!-- 切换图标，点击时触发onTap事件 -->
    <image bindtap="onTap" class="switch" src="../../imgs/switch.png"></image>
    <!-- 英文图标，点击时触发onTap事件 -->
    <image bindtap="onTap" class="language_pic" src="../../imgs/English.png" />
    <!-- 英文文字，点击时触发onTap事件 -->
    <text bindtap="onTap" class="language_text" decode>&nbsp;英语</text>
  </view>
</view>

<!-- 摄像头视图 -->
<camera style="margin-top:0rpx;width:100%;height:1100rpx"></camera>

<!-- 工具栏视图 -->
<view class="toolbar">
  <!-- 拍照图标，点击时触发takeShot事件 -->
  <image class="shot" src="../../imgs/takeshot.png" bindtap="takeShot"></image>
</view>

```

##### 4 getPic.wxss

这段CSS样式表的主要功能是：

1. `.head`：设置头部视图的样式，包括位置、大小和背景颜色。
2. `.btn`：设置按钮的样式，包括背景颜色、大小、内边距、颜色、边框圆角、外边距和文本对齐方式。
3. `.toolbar`：设置工具栏的样式，使用Flex布局，设置宽度、高度、主轴对齐方式和交叉轴对齐方式。
4. `.shot`：设置拍照图标的样式，包括大小、文本对齐方式和上外边距。
5. `image`：设置图片的样式，包括大小和垂直对齐方式。
6. `.language`：设置语言切换视图的样式，使用Flex布局，设置上内边距、宽度、左内边距和垂直对齐方式。
7. `.language_pic`：设置语言图标的样式，包括上内边距和垂直对齐方式。
8. `.language_text`：设置语言文字的样式，包括上内边距、字体大小、字体家族、行高、颜色、上下左外边距、字体家族和行高。
9. `.switch`：设置切换图标的样式，使用Flex布局，设置对齐方式、方向、边框圆角、大小和自动外边距。

这些样式主要用于设置微信小程序中的元素样式，使得元素在页面上的布局和外观符合设计要求。

```css
/* 头部视图样式 */
.head {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 200rpx;
  background-color: #1493FC;
}

/* 按钮样式 */
.btn {
  background-color: #1493fc;
  width: 200rpx;
  padding: 15rpx 20rpx;
  color: #fff;
  border-radius: 20rpx;
  margin: 40rpx;
  text-align: center;
}

/* 工具栏样式 */
.toolbar {
  display: flex;
  width: auto;
  height: 100rpx;
  justify-content: center;
  align-items: center;
}

/* 拍照图标样式 */
.shot {
  width: 110rpx;
  height: 110rpx;
  text-align: center;
  margin-top: 50rpx;
}

/* 图片样式 */
image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: bottom;
}

/* 语言切换视图样式 */
.language {
  display: flex;
  padding-top: 100rpx;
  width: 300rpx;
  padding-left: 80rpx;
  vertical-align: bottom;
}

/* 语言图标样式 */
.language_pic {
  padding-top: 25rpx;
  vertical-align: text-bottom;
}

/* 语言文字样式 */
.language_text {
  padding-top: 20rpx;
  font-size: 30rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #ffffff;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  margin-left: 10rpx;
  font-family: Poppins;
  line-height: 22rpx;
}

/* 切换图标样式 */
.switch {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 16rpx;
  width: 72rpx;
  height: 72rpx;
  margin: auto;
}

```

#### 4.1.4.4 pages/history

##### 1 history.js

这段代码的主要功能是：

1. 显示历史记录：当页面显示时，会从本地存储中获取历史记录，并显示到页面上。
2. 点击历史记录项：用户可以点击历史记录项，页面会重新加载首页，并将点击的历史记录项的查询参数传递给首页。
3. 清除历史记录：用户可以点击按钮触发`onClearHistory`方法，清除页面数据中的历史记录数组，并清除本地存储中的历史记录。

```javascript
// 引入全局的app实例
const app = getApp()

// 定义一个页面
Page({
  // 页面的初始数据
  data: {
    history: [] // 历史记录数组
  },

  // 页面显示时的回调函数
  onShow: function () {
    // 从本地存储中获取历史记录，并设置到页面数据中
    this.setData({
      history: wx.getStorageSync('history')
    })
  },

  // 点击历史记录项时的回调函数
  onTapItem: function (e) {
    // 重新加载首页，并传递点击的历史记录项的查询参数
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },

  // 清除历史记录的回调函数
  onClearHistory: function () {
    // 将页面数据中的历史记录数组设置为空
    this.setData({
      history: []
    })

    // 清除本地存储中的历史记录
    wx.clearStorage('history')
  },
})

```

##### 2 history.json

缺省代码。

```json
{
  "navigationBarTitleText": ""
}
```

##### 3 history.wxml

这段代码的主要功能是：

1. 显示翻译历史：页面上有一个滚动视图，里面包含了一个历史记录列表视图，列表中的每一项都是一个历史记录项，显示了查询的语言、查询的文本、结果的语言和结果的文本。
2. 清除历史记录：用户可以点击“清除历史记录”文本，触发`onClearHistory`事件，清除历史记录。
3. 查看历史记录：用户可以点击历史记录项，触发`onTapItem`事件，查看历史记录的详细信息。

```html
<!-- 可滚动视图，设置为纵向滚动 -->
<scroll-view scroll-y class="container">
  <!-- 历史记录列表视图 -->
  <view class="history-list">
    <!-- 头部视图 -->
    <view class="header">
      <!-- 标题文本 -->
      <text class="title">翻译历史</text>
      <!-- 清除历史记录文本，点击时触发onClearHistory事件 -->
      <text bindtap='onClearHistory' class="iconfont icon-close">清除历史记录</text>
    </view>
    <!-- 历史记录项视图，遍历历史记录数组，点击时触发onTapItem事件，传递查询参数和语言索引 -->
    <view class="item" wx:for="{{history}}" wx:key="index" bindtap='onTapItem' data-query="{{item.query}}" data-langId="{{item.langIndex}}">
      <!-- 查询视图 -->
      <view class="query">
        <!-- 语言视图 -->
        <view class="language">
          <!-- 语言图标 -->
          <image src="../../imgs/Chinese.png" />
          <!-- 语言文本 -->
          中文
        </view>
        <!-- 查询文本 -->
        {{item.query}}
      </view>
      <!-- 结果视图 -->
      <view class="result">
        <!-- 语言视图 -->
        <view class="language">
          <!-- 语言图标 -->
          <image src="../../imgs/English.png" />
          <!-- 语言文本 -->
          英语
        </view>
        <!-- 结果文本 -->
        {{item.result}}
      </view>
    </view>
  </view>
</scroll-view>

```

##### 4 history.wxss

这些样式主要用于设置微信小程序中的元素样式，使得元素在页面上的布局和外观符合设计要求。具体包括：

1. `.history-list`：设置历史记录列表的样式，使用Flex布局，设置为列方向，设置内边距。
2. `.header`：设置头部视图的样式，使用Flex布局，设置上外边距。
3. `.title`：设置标题文本的样式，设置字体大小和颜色。
4. `.icon-close`：设置清除历史记录图标的样式，设置左外边距为自动，设置字体大小和颜色。
5. `.item`：设置历史记录项的样式，包括上外边距、内边距、背景颜色、边框圆角和阴影。
6. `.item .query`：设置查询视图的样式，包括内边距、底部边框、字体大小、字体家族、行高和颜色。
7. `.item .query .language`：设置查询语言的样式，包括字体大小、字体家族、行高、颜色、上下外边距。
8. `.item .result`：设置结果视图的样式，包括上外边距、内边距、字体大小、字体家族、行高和颜色。
9. `.item .result .language`：设置结果语言的样式，包括字体大小、字体家族、行高、颜色和下外边距。
10. `image`：设置图片的样式，包括宽度、高度和垂直对齐方式。

这些样式主要用于设置微信小程序中的元素样式，使得元素在页面上的布局和外观符合设计要求。

```css
/* 历史记录列表样式 */
.history-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

/* 头部视图样式 */
.header {
  display: flex;
  margin-top: 100rpx;
}

/* 标题文本样式 */
.title {
  flex: 1;
  font-size: 26rpx;
  color: #8995a1;
}

/* 清除历史记录图标样式 */
.icon-close {
  margin-left: auto;
  color: #aaa;
  font-size: 26rpx;
}

/* 历史记录项样式 */
.item {
  margin-top: 40rpx;
  padding: 0 32rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
}

/* 查询视图样式 */
.item .query {
  padding: 20rpx;
  border-bottom: solid 2rpx #e7e7e7;
  font-size: 32rpx;
  font-family: Poppins;
  line-height: 50rpx;
  color: #1e3163;
}

/* 查询语言样式 */
.item .query .language {
  font-size: 28rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #a8abb0;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}

/* 结果视图样式 */
.item .result {
  margin-top: 16rpx;
  padding: 20rpx;
  font-size: 32rpx;
  font-family: Poppins;
  line-height: 50rpx;
  color: #1e3163;
}

/* 结果语言样式 */
.item .result .language {
  font-size: 28rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #909dbd;
  margin-bottom: 10rpx;
}

/* 图片样式 */
image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: bottom;
}
```

#### 4.1.4.5 pages/index

##### 1 index.js

这段代码的主要功能包括：

1. 用户输入文本进行翻译，翻译结果会保存在历史记录中。
2. 用户可以点击清除图标清除输入的文本和翻译结果。
3. 用户可以复制输入的文本和翻译结果。
4. 用户可以播放翻译的语音。
5. 用户可以查看翻译的历史记录。

以下是代码的流程图：

```mermaid
classDiagram
  Page --|> data : contains
  Page --|> onLoad : function
  Page --|> onShow : function
  Page --|> onInput : function
  Page --|> onTapClose : function
  Page --|> onConfirm : function
  Page --|> copyTextIN : function
  Page --|> copyTextOUT : function
  Page --|> playTranslateVoice : function
  Page --|> onTapItem : function
  data : query
  data : hideClearIcon
  data : result
  data : curLang
  data : currentTranslateVoice
  data : currentsound
  data : history
```

```javascript
// 引入翻译工具和全局应用实例
import { translate } from '../../utils/api.js'
const app = getApp()
const plugin = requirePlugin("WechatSI")

Page({
  data: {
    query: '', // 用户输入的查询文本
    hideClearIcon: false, // 控制清除图标的显示与隐藏
    result: [], // 翻译结果
    curLang: {}, // 当前选择的语言
    fromLang:{},
    currentTranslateVoice: '', // 当前播放的语音路径
    currentsound: '', // 当前语音合成语言
    history: [] // 翻译历史记录
  },

  // 页面加载时的处理函数
  onLoad: function (options) {
    if (options.query) {
      this.setData({
        query: options.query,
        'hideClearIcon': false // 显示清除图标
      })
    }
  },

  // 页面显示时的处理函数
  onShow: function () {
    this.setData({
      history: wx.getStorageSync('history') // 从本地存储获取历史记录
    })
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
     if (this.data.fromLang.lang !== app.globalData.fromLang.lang) {
      this.setData({
        fromLang: app.globalData.fromLang
      })
      this.onConfirm() // 执行翻译
    }
  },

  // 处理用户输入的函数
  onInput: function (e) {
    this.setData({
      'query': e.detail.value,
      'hideClearIcon': this.data.query.length > 0 ? false : true // 根据输入内容是否为空来决定是否显示清除图标
    })
  },

  // 处理用户点击清除图标的函数
  onTapClose: function () {
    this.setData({
      query: '',
      hideClearIcon: true,
      result: '' // 清除翻译结果
    })
  },

  // 执行翻译的函数
  onConfirm: function () {
    if (!this.data.query) return // 如果查询文本为空，则不执行翻译
    translate(this.data.query, {
      from: this.data.fromLang.lang || 'auto',
      to: this.data.curLang.lang
    }).then(res => {
      this.setData({
        'result': res.trans_result
      })

      // 更新历史记录
      let history = wx.getStorageSync('history') || []
      history.unshift({
        query: this.data.query,
        result: res.trans_result[0].dst,
        from: res.from,
        to: res.to
      })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  },

  // 复制输入文本的函数
  copyTextIN: function (e) {
    wx.setClipboardData({
      data: this.data.query,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },

  // 复制翻译结果的函数
  copyTextOUT: function (e) {
    wx.setClipboardData({
      data: this.data.result[0].dst,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
     });
  },

  // 播放翻译语音的函数
  playTranslateVoice: function (e) {
    let componentId = e.currentTarget.dataset.id;
    this.setData({
      currentsound: wx.getStorageSync('currentsound') || 'en_US'
    })
    let lto = this.data.currentsound
    let content = (componentId === 'src') ? this.data.result[0].src : this.data.result[0].dst
    plugin.textToSpeech({
      lang: lto,
      content: content,
      success: resTrans => {
        if (resTrans.retcode == 0) {
          this.setData({
            currentTranslateVoice: resTrans.filename,
          })
          let play_path = this.data.currentTranslateVoice
          if (!play_path) {
            console.warn("no translate voice path")
            return
          }
          let audio = wx.createInnerAudioContext()
          audio.src = play_path // 设置音频的源
          audio.play() // 播放音频
          audio.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
          })

        } else {
          console.warn("语音合成失败", resTrans)
        }
      },
      fail: function (resTrans) {
        console.warn("语音合成失败", resTrans)
      }
    })
  },

  // 跳转到历史记录页面的函数
  onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/history/history`
    })
  },
})
```

##### 2 index.json

缺省代码。

```json
{}
```

##### 3 index.wxml

这段代码是微信小程序的WXML模板，用于构建用户界面。主要包括以下部分：

1. **container**：这是页面的主容器。
2. **background**：包含logo和背景图片。
3. **change**：这部分包含语言切换部分，用户可以在这里选择翻译的源语言和目标语言。
4. **input-area**：这是用户输入要翻译的文本的地方。输入区域包含一个文本框和一个语音按钮，用户可以通过输入或语音输入文本。
5. **output-area**：这是显示翻译结果的地方。输出区域包含一个文本结果区域和一个语音按钮，用户可以听到翻译的结果。
6. **trans_history_area**：这部分显示用户的翻译历史。用户可以看到他们过去翻译的文本和结果。

这是该代码的框架图：

```mermaid
graph TB
  A["container"]
  A --> B1["background"]
  B1 --> C1["logo"]
  B1 --> C2["background image"]
  A --> B2["change"]
  B2 --> C3["switch_language_from"]
  B2 --> C4["switch"]
  B2 --> C5["switch_language_to"]
  A --> B3["input-area"]
  B3 --> C6["textarea-wrap"]
  C6 --> D1["textarea"]
  C6 --> D2["language_from"]
  D2 --> E1["voice"]
  D2 --> E2["copy"]
  B3 --> C7["output-area"]
  C7 --> D3["result"]
  D3 --> E3["text-result"]
  C7 --> D4["language_to"]
  D4 --> E4["voice"]
  D4 --> E5["copy"]
  A --> B4["trans_history_area"]
  B4 --> C8["trans_history_title"]
  B4 --> C9["trans_history_list"]
  C9 --> D5["item"]
  D5 --> E6["query"]
  D5 --> E7["result"]
  linkStyle 0 stroke:#2ecd71,stroke-width:2px;
  linkStyle 1 stroke:#2ecd71,stroke-width:2px;
  linkStyle 2 stroke:#2ecd71,stroke-width:2px;
  linkStyle 3 stroke:#2ecd71,stroke-width:2px;
  linkStyle 4 stroke:#2ecd71,stroke-width:2px;
  linkStyle 5 stroke:#2ecd71,stroke-width:2px;
  linkStyle 6 stroke:#2ecd71,stroke-width:2px;
  linkStyle 7 stroke:#2ecd71,stroke-width:2px;
  linkStyle 8 stroke:#2ecd71,stroke-width:2px;
  linkStyle 9 stroke:#2ecd71,stroke-width:2px;
  linkStyle 10 stroke:#2ecd71,stroke-width:2px;
  linkStyle 11 stroke:#2ecd71,stroke-width:2px;
  linkStyle 12 stroke:#2ecd71,stroke-width:2px;
  linkStyle 13 stroke:#2ecd71,stroke-width:2px;
  linkStyle 14 stroke:#2ecd71,stroke-width:2px;
  linkStyle 15 stroke:#2ecd71,stroke-width:2px;
  linkStyle 16 stroke:#2ecd71,stroke-width:2px;
  linkStyle 17 stroke:#2ecd71,stroke-width:2px;
  linkStyle 18 stroke:#2ecd71,stroke-width:2px;
  linkStyle 19 stroke:#2ecd71,stroke-width:2px;
  linkStyle 20 stroke:#2ecd71,stroke-width:2px;
  linkStyle 21 stroke:#2ecd71,stroke-width:2px;
  linkStyle 22 stroke:#2ecd71,stroke-width:2px;
  linkStyle 23 stroke:#2ecd71,stroke-width:2px;
  linkStyle 24 stroke:#2ecd71,stroke-width:2px;

```

```html
<!--index.wxml-->
<view class="container">
  <!-- 背景图片和logo -->
  <view class="background">
    <image class="logo" src="../../imgs/logo.png"></image>
    <image class="background" src="../../imgs/background.png"></image>
  </view>

  <!-- 语言切换部分 -->
  <view class="change">
    <navigator url="/pages/choose_language/choose_language" hover-class="navigator-hover">
      <view class="switch_language_from">
        <image class="switch_language_pic" src="{{fromLang.src}}" />
        <text class="switch_language_from_text" decode="true">&nbsp;&nbsp;{{from.chs}}</text>
        <text class="iconfont icon-down"></text>
      </view>
      <image class="switch" src="../../imgs/switch.png"></image>
      <view class="switch_language_to">
        <image class="switch_language_pic" src="{{curLang.src}}" />
        <text class="switch_language_to_text" decode="true">&nbsp;&nbsp;{{curLang.chs}}</text>
        <text class="iconfont icon-down"></text>
      </view>
    </navigator>
  </view>

  <!-- 输入区域 -->
  <view class="input-area">
    <view class="textarea-wrap">
      <textarea placeholder='请输入要翻译的文本' placeholder-style=' color: #1e3163;line-height: 34rpx;font-size: 36rpx;font-family: Poppins;' bindinput='onInput' bindconfirm='onConfirm' bindblur='onConfirm' value="{{query}}"></textarea>
      <view class="language_from">
        <image class="language_pic" src="{{fromLang.src}}" />
        <text class="language_from_text">{{from.chs}}</text>
        <view data-id="src" catchtap="playTranslateVoice" catchtouchstart="playTranslateVoice">
          <image class="voice" src="../../imgs/voice.png" mode="widthFix" />
        </view>
        <view class="copy" bindtap="copyTextIN">
          <image src="../../imgs/copy.png" mode="widthFix" />
        </view>
      </view>
    </view>

    <!-- 输出区域 -->
    <view class="output-area">
      <view class="result">
        <view class="text-result" wx:for="{{result}}" wx:key="index">
          <text selectable="true" decode="true">{{item.dst}}</text>
        </view>
      </view>
      <view class="language_to">
        <image class="language_pic" src="{{curLang.src}}" />
        <text class="language_to_text">{{curLang.chs}}</text>
        <view data-id="tar" catchtap="playTranslateVoice" catchtouchstart="playTranslateVoice">
          <image class="voice" src="../../imgs/voice_white.png" mode="widthFix" />
        </view>
        <view class="copy" bindtap="copyTextOUT">
          <image src="../../imgs/copy_white.png" mode="widthFix" />
        </view>
      </view>
    </view>

        <!-- 翻译历史模块 -->
    <view class="trans_history_area">
      <view class="trans_history_title">
        <view class="trans_history_title_chi">翻译历史</view>
        <view class="trans_history_title_eng">Translation History</view>
      </view>
      <view class="trans_history_list">
        <view class="item" wx:for="{{history}}" wx:key="index" bindtap='onTapItem' data-query="{{item.query}}" data-langId="{{item.langIndex}}">
          <view class="query">
            <view class="language">
              <image src="../../imgs/Chinese.png" />
              中文
            </view>
            {{item.query}}
          </view>
          <view class="result">
            <view class="language">
              <image src="../../imgs/English.png" />
              英语
            </view>
            {{item.result}}
          </view>
        </view>
      </view>
    </view>
  </view>
</view>

```

##### 4 index.wxss

这段代码是微信小程序的WXSS样式表，用于设置页面的样式。主要包括以下部分：

1. **container**：设置页面的主容器的位置、大小和背景颜色。
2. **logo和background**：设置logo和背景图片的位置、大小和显示方式。
3. **change**：设置语言切换部分的样式，包括颜色、字体大小、内外边距、显示方式、对齐方式等。
4. **input-area和textarea-wrap**：设置用户输入要翻译的文本的区域的样式，包括位置、背景颜色、边距、边框、阴影等。
5. **output-area**：设置显示翻译结果的区域的样式，包括显示方式、最小高度、边距、边框、背景颜色、阴影等。
6. **trans_history_area**：设置显示用户的翻译历史的区域的样式，包括边距、标题的样式、列表项的样式等。

```css
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  height: 500rpx;
  /* background: linear-gradient(to bottom, #1493FC 40%, #FFFFFF 60%); */
  background: #1493FC;
}

.container .logo {
  position: fixed;
  display: flex;
  margin-top: 20rpx;
  width: 387rpx;
  height: 211rpx;
  left: 20rpx;
  top: 0rpx;
}

.container .background {
  position: fixed;
  display: flex;
  width: 312rpx;

  height: 288rpx;
  right: 0;
  top: 60rpx;
}

.change {
  color: #8995a1;
  font-size: 24 rpx;
  /* padding: 20rpx 40rpx; */
  display: block;
  align-items: center;
  justify-content: space-between;
  margin: 30rpx 50rpx 0;
  margin-top: 220rpx;
  padding: 32rpx 18rpx;
  background-color: #1265dd;
  border-radius: 16rpx;
}

.change .icon-right {
  color: #888;
}

.change .icon-down {
  color: #8995a1;
  font-size: 20rpx;
}

.change .switch_language_from {
  position: fixed;
  display: flex;
  flex-direction: row;
  margin-left: 6rpx;
  top: 265rpx;
  left: 100rpx;
  align-items: center;
  justify-content: center;
}

.change .switch {
  /* display: flex; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 16rpx;
  width: 72rpx;
  height: 72rpx;
  margin: auto;
}

.change .switch_language_to {
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 265rpx;
  right: 100rpx;
  align-items: center;
  justify-content: center;
  vertical-align: text-bottom;
}


.input-area {
  position: relative;
}

.textarea-wrap {
  background: #fff;
  margin: 50rpx;
  border-bottom: 1px solid #c7cee0;
  padding: 0 32rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
  height: 300rpx;
  left: 6.13%;
  right: 6.67%;
  top: 53.72%;
  bottom: 0.55%;
  color: #1e3163;
  line-height: 34rpx;
  font-size: 36rpx;
  font-family: Poppins;
}

.language_from {
  bottom: auto;
  font-size: 30rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #a8abb0;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  font-family: Poppins;
  line-height: 22rpx;
}

.language_pic {
  margin-top: 20rpx;
  width: 40rpx;
  height: 40rpx;
  vertical-align: text-bottom;
}

.language_from_text {
  font-size: 30rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #a8abb0;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  margin-left: 10rpx;
  font-family: Poppins;
  line-height: 22rpx;
}

.input-area textarea {
  background-color: #fff;
  padding: 30rpx 0 30rpx 10rpx;
  /* width: calc(100% - 48rpx); */
  width: auto;
  margin: 0;
  box-sizing: border-box;
  height: 210rpx;
  border-bottom: solid 2rpx #e7e7e7;
  padding-right: 0;

}

.input-area .icon-close {
  position: absolute;
  right: 12rpx;
  top: 20rpx;
  z-index: 100;
  font-size: 40rpx;
  color: #888;
}

.voice {
  position: fixed;
  margin-top: -40rpx;
  width: 40rpx;
  height: 40rpx;
  vertical-align: text-bottom;
  text-align: end;
  right: 150rpx;
}

.copy {
  position: fixed;
  margin-top: -45rpx;
  width: 50rpx;
  height: 50rpx;
  right: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}


.play-icon {
  position: absolute;
  right: 3rpx;
  bottom: 7rpx;
  padding: 0 8rpx;
  display: flex;
  align-items: center;
}

.edit-icon::before .play-icon::before {
  content: "";
  position: absolete;
  top: -10rpx;
  left: -10rpx;
  bottom: -10rpx;
  right: -10rpx;
}


.input-area .output-area {
  display: flex;
  flex-direction: column;
  min-height: 150rpx;
  margin: 50rpx;
  border-bottom: 1px solid #c7cee0;
  padding: 0 32rpx;
  background-color: #1493FC;
  border-radius: 16rpx;
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
  height: 300rpx;
  left: 24px;
  right: 24px;
  top: 384px;
  bottom: 262px;
}

.output-area .text-result {
  min-height: 150rpx;
  /* margin-top: 20rpx; */
  /* padding: 20rpx 0; */
  height: 150rpx;
  /* border-bottom: solid 2rpx #e7e7e7; */
  color: #ffffff;
  line-height: 32rpx;
  font-size: 36rpx;
  font-family: Poppins;
  line-height: 33rpx;
}

.output-area .result {
  margin-bottom: 10px;
  /* 这里的值可以根据你的需求来调整 */
  min-height: 150rpx;
  margin-top: 20rpx;
  padding: 20rpx 0;
  height: 150rpx;
  border-bottom: solid 2rpx #e7e7e7;
  color: #ffffff;
  line-height: 32rpx;
  font-size: 36rpx;
  font-family: Poppins;
  line-height: 33rpx;
}

.language_to {
  /* bottom: auto; */
  font-size: 30rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #a8abb0;
  /* margin-top: 10rpx; */
  margin-bottom: 10rpx;
  font-family: Poppins;
  line-height: 22rpx;
}

.language_to_text {
  font-size: 30rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #ffffff;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  margin-left: 10rpx;
  font-family: Poppins;
  line-height: 22rpx;
}

.trans_history_area {
  margin: 55rpx;
}

.trans_history_area .trans_history_title {
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
}

.trans_history_area .trans_history_title .trans_history_title_chi {
  color: transparent;
  font-size: 32rpx;
  font-family: Poppins;
  font-weight: 700;
  line-height: 30rpx;
  background-image: linear-gradient(180deg, #0064e1 0%, #0845c2 100%);
  -webkit-background-clip: text;
}

.trans_history_area .trans_history_title .trans_history_title_eng {
  color: #949494;
  line-height: 24rpx;
  font-style: italic;
  font-family: Poppins;
  line-height: 22rpx;
}

.item {
  margin-top: 40rpx;
  padding: 0 10rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
}

.item .query {
  padding: 20rpx;
  border-bottom: solid 2rpx #e7e7e7;
  font-size: 32rpx;
  font-family: Poppins;
  line-height: 50rpx;
  color: #1e3163;
}

.item .query .language {
  font-size: 28rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #a8abb0;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}

.item .result {
  margin-top: 16rpx;
  padding: 20rpx;
  font-size: 32rpx;
  font-family: Poppins;
  line-height: 50rpx;
  color: #1e3163;
}

.item .result .language {
  font-size: 28rpx;
  font-family: Poppins;
  line-height: 26rpx;
  color: #909dbd;
  margin-bottom: 10rpx;
}

image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: bottom;
}
```

#### 4.1.4.6 pages/OCR

##### 1 OCR.js

这段代码的主要功能是：

1. 上传图片：用户可以通过点击按钮上传图片，然后跳转到另一个页面进行图片的选择和处理。
2. 获取OCR：通过调用API，将上传的图片进行OCR识别，提取出图片中的文字，并将识别结果进行翻译。
3. 返回按钮：用户可以通过点击返回按钮返回到上一个页面。

```javascript
// 导入翻译工具
import { translate } from '../../utils/api.js'

// 获取全局应用程序实例对象
const app = getApp();

// 定义页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    src: "",  // 图片源
    sourceText: [],  // 原始文本
    resultText: '',  // 翻译结果
    imgList: [],  // 图片列表
    filePath: '',  // 文件路径
    picBase64: '',  // 图片的base64编码
    textSrc: '',  // 原文本
    textDst: ''  // 目标文本
  },

  // 页面显示时的回调函数
  onShow: function () {
    // 如果全局变量中的图片base64编码不为空
    if (app.globalData.picBase64 != "") {
      // 更新数据
      this.setData({
        src: app.globalData.picBase64,
      })
    }
  },

  // 上传图片的函数
  uploadImg: function () {
    // 导航到获取图片的页面
    wx.navigateTo({
      url: '../getPic/getPic',
    })
  },

  // 获取OCR的函数
  getOCR: function () {
    // 提取图片里的文字
    var that = this;
    wx.request({
      url: 'https://api.jisuapi.com/generalrecognition/recognize?appkey=993bfd80d8ac15c6',
      data: {
        pic: this.data.src,
        type: "cnen"
      },
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res);
        that.setData({
          sourceText: res.data.result
        })
        let str = that.data.sourceText.join()
        console.log(str)
        translate(str, {
          from: 'zh',
          to: 'en'
        }).then(res => {
          console.log(res)
          that.setData({
            resultText: res.trans_result[0].dst
          })
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  // 返回按钮的点击事件处理函数
  onBackIconTap: function () {
    // 导航回上一页
    wx.navigateBack({
      delta: 1, // 返回的页面层数
    });
  }
})

```

##### 2 OCR.json

缺省代码。

```json
{
  "usingComponents": {}
}
```

##### 3 OCR.wxml

这段代码的主要功能是：

1. 显示一个返回按钮，用户可以通过点击返回按钮返回到上一个页面。
2. 显示一个图片，图片的源数据是base64编码的。
3. 提供一个按钮，用户可以通过点击按钮触发OCR识别和翻译的功能。
4. 显示OCR识别和翻译的结果，包括源语言（中文）的文本和目标语言（英语）的文本。

```html
<!-- 头部视图 -->
<view class="head"> 
  <!-- 返回图标视图，点击时触发onBackIconTap事件 -->
  <view id="back-icon" class="back-icon"  bindtap="onBackIconTap" >
    <!-- 返回箭头图标 -->
    <image src="../../imgs/arrow-left.png" class="arrow-icon"></image>
  </view>
</view>

<!-- 容器视图 -->
<view class="container">
  <!-- 图片视图，图片源为base64编码的数据，宽度为100%，高度为1000rpx -->
  <image src="data:image/png;base64,{{src}}" style="width:100%;height:1000rpx"></image>
  
  <!-- 翻译图片按钮，点击时触发getOCR事件 -->
  <view bindtap="getOCR" class="btn">
    翻译图片
  </view>
  
  <!-- 项目视图 -->
  <view class="item">
    <!-- 查询视图 -->
    <view class="query">
      <!-- 语言视图，包含一个图标和文本“中文” -->
      <view class="language">
        <image src="../../imgs/Chinese.png" />
        中文
      </view>
      <!-- 显示源文本 -->
      <text>{{sourceText}}</text>
    </view>
    
    <!-- 结果视图 -->
    <view class="result">
      <!-- 语言视图，包含一个图标和文本“英语” -->
      <view class="language">
        <image src="../../imgs/English.png" />
        英语
      </view>
      <!-- 显示翻译结果文本 -->
      <text>{{resultText}}</text>
    </view>
  </view>
</view>
```

##### 4 OCR.wxss

这段代码定义了一些样式规则，用于美化小程序中的各个元素的外观和布局。

其中包括头部视图、返回图标、箭头图标、按钮、项目视图、查询视图、查询语言、结果视图、结果语言和图片的样式。

通过设置不同的样式属性，如位置、大小、颜色等，可以使页面元素呈现出不同的效果，增强用户体验。

```css
/* 容器样式 */
.container {
  /* 居中对齐 */
  text-align: center;
}

/* 头部样式 */
.head {
  /* 相对定位 */
  position: relative;
  /* 顶部和左侧边距为0，宽度为100%，高度为200rpx */
  top: 0;
  left: 0;
  width: 100%;
  height: 200rpx;
  /* 背景颜色为#1493FC */
  background-color: #1493FC;
}

/* 返回图标样式 */
.back-icon {
  /* 绝对定位，位于头部视图的左上角 */
  position: absolute;
  top: 50px;
  left: 20px;
  /* z-index用于控制元素的层叠顺序 */
  z-index: 1;
  /* 背景颜色为#1493FC */
  background-color: #1493fc;
}

/* 箭头图标样式 */
.arrow-icon {
  width: 30px;
  height: 30px;
}

/* 按钮样式 */
.btn {
  /* 背景颜色为#1493FC */
  background-color: #1493fc;
  /* 上下内边距为15rpx，左右内边距为20rpx */
  padding: 15rpx 20rpx;
  /* 文本颜色为白色 */
  color: #fff;
  /* 圆角半径为20rpx */
  border-radius: 20rpx;
  /* 外边距为40rpx */
  margin: 40rpx;
}

/* 项目样式 */
.item {
  /* 上外边距为40rpx，左右内边距为10rpx */
  margin-top: 40rpx;
  padding: 0 10rpx;
  /* 背景颜色为白色 */
  background-color: #ffffff;
  /* 圆角半径为16rpx */
  border-radius: 16rpx;
  /* 阴影效果 */
  box-shadow: 0px 0px 2rpx #0000000a, 0px 0px 4rpx #0000000f, 0px 8rpx 16rpx #0000000a;
}

/* 查询样式 */
.item .query {
  /* 内边距为20rpx */
  padding: 20rpx;
  /* 底部边框为实线，宽度为2rpx，颜色为#e7e7e7 */
  border-bottom: solid 2rpx #e7e7e7;
  /* 字体大小为32rpx */
  font-size: 32rpx;
  /* 字体家族为Poppins */
  font-family: Poppins;
  /* 行高为50rpx */
  line-height: 50rpx;
  /* 字体颜色为#1e3163 */
  color: #1e3163;
}

/* 查询语言样式 */
.item .query .language {
  /* 字体大小为28rpx */
  font-size: 28rpx;
  /* 字体家族为Poppins */
  font-family: Poppins;
  /* 行高为26rpx */
  line-height: 26rpx;
  /* 字体颜色为#a8abb0 */
  color: #a8abb0;
  /* 上外边距为10rpx，下外边距为10rpx */
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}

/* 结果样式 */
.item .result {
  /* 上外边距为16rpx */
  margin-top: 16rpx;
  /* 内边距为20rpx */
  padding: 20rpx;
  /* 字体大小为32rpx */
  font-size: 32rpx;
  /* 字体家族为Poppins */
  font-family: Poppins;
  /* 行高为50rpx */
  line-height: 50rpx;
  /* 字体颜色为#1e3163 */
  color: #1e3163;
}

/* 结果语言样式 */
.item .result .language {
  /* 字体大小为28rpx */
  font-size: 28rpx;
  /* 字体家族为Poppins */
  font-family: Poppins;
  /* 行高为26rpx */
  line-height: 26rpx;
  /* 字体颜色为#909dbd */
  color: #909dbd;
  /* 下外边距为10rpx */
  margin-bottom: 10rpx;
}

/* 图片样式 */
image {
  width: 30rpx;
  height: 30rpx;
  /* 垂直对齐方式为底部对齐 */
  vertical-align: bottom;
}

```

#### 4.1.4.7 pages/voice_translation

语音翻译页面，主要功能是通过微信的语音插件实现语音的录制、识别和翻译。

以下代码的主要功能：

1. 语音录制：用户按下按钮时，开始进行语音录制，录制过程中会实时显示识别结果。当用户松开按钮时，结束录制，并进行语音识别。
2. 语音识别：语音识别的结果会添加到对话列表中，显示在页面上。如果识别结果为空，则会显示提示信息。
3. 语音翻译：识别后的文字会被发送到插件进行翻译，翻译的结果会被更新到对话列表中的相应位置。
4. 语音播放：当翻译完成后，页面会自动播放翻译后的语音。如果语音文件过期，会重新进行语音合成。
5. 语言切换：用户可以点击按钮切换输入语言，支持中英文切换。
6. 历史记录：用户的历史录音和翻译记录会被保存，在用户再次进入页面时可以查看。
7. 滚动显示：当识别或翻译的内容添加到对话列表时，页面会自动滚动到最新的内容。

##### 1 voice_translation.js
页面数据的配置
```javascript
// 获取应用实例
const app = getApp()

// 引入工具库
const util = require('../../utils/util.js')

// 引入微信语音插件
const plugin = requirePlugin("WechatSI")

// 引入语言配置文件
import { language } from '../../utils/conf.js'

// 获取全局唯一的语音识别管理器
const manager = plugin.getRecordRecognitionManager()

Page({
  // 页面的初始数据
  data: {
    dialogList: [],  // 对话列表，初始为空
    lan_type: true,  // 语言类型
    scroll_top: 10000,  // 竖向滚动条位置
    bottomButtonDisabled: false,  // 底部按钮是否禁用
    tips_language: language[0],  // 提示语言，初始为中文
    // 初始时的翻译卡片
    initTranslate: {
      create: '04/27 15:37',
      text: '等待说话',
    },
    // 当前的翻译卡片
    currentTranslate: {
      create: '04/27 15:37',
      text: '等待说话',
    },
    recording: false,  // 是否正在录音
    recordStatus: 0,   // 录音状态： 0 - 录音中 1- 翻译中 2 - 翻译完成/二次翻译
    toView: 'fake',  // 滚动位置
    lastId: -1,    // dialogList 最后一个item的 id
    currentTranslateVoice: '', // 当前播放语音路径
    // 图片路径
    image_c:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/153cd789341a2b9a6a2d1ac163978ba0.png',
    image_e:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/e9fc70c625980d75443bf2ae1516d24f.png'
  },
```
​		录音按钮函数streamRecord，streamRecordEnd，当用户松开按钮后，结束语音识别。函数首先检查是否已经在录音，如果没有，或者已经在录音但录音状态不为0（这可能意味着录音已经被停止），则返回。否则，它会停止录音，并禁用底部按钮以防止重复停止。

​		接着是一个函数changelanguage，该函数用于切换语音识别的语言。它首先切换lan_type的值（这可能是一个布尔值，表示使用的是哪种语言）。然后，根据新的lan_type的值，设置适当的初始化翻译文本。
```javascript
  // 按住按钮开始语音识别
  streamRecord: function(e) {
    // 开始语音识别
    manager.start({
      lang: e.detail.buttonItem.lang,
    })

    // 根据语言类型设置翻译卡片内容
    let lan_type = this.data.lan_type
    this.setData({
      recordStatus: 0,
      recording: true,
      currentTranslate: {
        create: util.recordTime(new Date()),
        text:  lan_type ?'正在聆听中':'listening',
        lfrom: lan_type ? e.detail.buttonItem.lang : e.detail.buttonItem.lto,
        lto: lan_type ? e.detail.buttonItem.lto : e.detail.buttonItem.lang,
      },
    })
       this.scrollToNew();

  },

   /**
   * 松开按钮结束语音识别
   */
  streamRecordEnd: function(e) {
    let detail = e.detail || {}  // 自定义组件触发事件时提供的detail对象
    let buttonItem = detail.buttonItem || {}

    // 防止重复触发stop函数
    if(!this.data.recording || this.data.recordStatus != 0) {
      console.warn("has finished!")
      return
    }

    // 停止录音识别
    manager.stop()

    // 禁用底部按钮
    this.setData({
      bottomButtonDisabled: true,
    })
  },

  // 切换语言
  changelanguage: function(){
    this.setData({
      lan_type:!this.data.lan_type,
    })

    if(this.data.lan_type) {
      this.setData({
        initTranslate: {
          create: util.recordTime(new Date()),
          text: '等待说话',
        },
      })
    } else {
      this.setData({
        initTranslate: {
          create: util.recordTime(new Date()),
          text: 'Please Speaking',
        },
      })
    }
  },
```
​		以下代码定义了函数 translateText ，该函数用于翻译文本。它接受两个参数：一个是要翻译的文本项，另一个是该项在对话列表中的索引。
​		这个函数首先确定源语言和目标语言，默认为从中文到英文。然后，它调用翻译插件，传入要翻译的文本，并启用文本到语音功能。
​		如果翻译失败， fail 回调函数会被调用，并记录一个错误。无论成功或失败， complete 回调函数都会被调用，用来更新录音状态，并隐藏加载提示。

```javascript
  /**
   * 翻译
   */
  translateText: function(item, index) {
    let lfrom =  item.lfrom || 'zh_CN'  // 原语言，默认为中文
    let lto = item.lto || 'en_US'  // 目标语言，默认为英文

    // 调用翻译插件
    plugin.translate({
      lfrom: lfrom,
      lto: lto,
      content: item.text,  // 要翻译的文本
      tts: true,  // 启用文本到语音
      success: (resTrans)=>{  // 翻译成功的回调函数

        let passRetcode = [
          0,  // 翻译合成成功
          -10006,  // 翻译成功，合成失败
          -10007,  // 翻译成功，传入了不支持的语音合成语言
          -10008  // 翻译成功，语音合成达到频率限制
        ]

        // 如果返回的结果是可接受的
        if(passRetcode.indexOf(resTrans.retcode) >= 0 ) {
          let tmpDialogList = this.data.dialogList.slice(0)

          // 如果索引有效
          if(!isNaN(index)) {
            // 更新当前条目的翻译结果
            let tmpTranslate = Object.assign({}, item, {
              autoPlay: true,  // 自动播放背景音乐
              translateText: resTrans.result,  // 翻译结果
              translateVoicePath: resTrans.filename || "",  // 语音文件路径
              translateVoiceExpiredTime: resTrans.expired_time || 0  // 语音文件过期时间
            })

            tmpDialogList[index] = tmpTranslate

            // 更新对话列表和底部按钮状态
            this.setData({
              dialogList: tmpDialogList,
              bottomButtonDisabled: false,
              recording: false,
            })

            // 滚动到新的位置
            this.scrollToNew();

          } else {
            console.error("index error", resTrans, item)
          }
        } else {
          console.warn("翻译失败", resTrans, item)
        }

      },
      fail: function(resTrans) {  // 翻译失败的回调函数
        console.error("调用失败",resTrans, item)
        this.setData({
          bottomButtonDisabled: false,
          recording: false,
        })
      },
      complete: resTrans => {  // 翻译完成的回调函数，无论成功或失败
        this.setData({
          recordStatus: 1,
        })
        wx.hideLoading()  // 隐藏加载提示
      }
    })

  },

```
​		在下面的代码段中，定义了函数translateTextAction，这个函数会在修改文本信息后触发，它调用translateText函数进行翻译。
​		定义了expiredAction函数，这个函数用于处理语音文件过期的情况，它会调用插件的文本到语音功能重新生成语音文件。

```javascript
    /**
   * 修改文本信息后触发翻译操作
   */
  translateTextAction: function(e) {
    // 获取由自定义组件触发事件提供的detail对象
    let detail = e.detail
    let item = detail.item
    let index = detail.index

    // 调用翻译函数
    this.translateText(item, index)
  },

  /**
   * 语音文件过期，重新合成语音文件
   */
  expiredAction: function(e) {
    // 获取由自定义组件触发事件提供的detail对象
    let detail = e.detail || {}
    let item = detail.item || {}
    let index = detail.index

    // 检查索引是否有效
    if(isNaN(index) || index < 0) {
      return
    }

    // 设定目标语言，默认为英语
    let lto = item.lto || 'en_US'

    // 调用插件的文本到语音功能
    plugin.textToSpeech({
      lang: lto,
      content: item.translateText,
      success: resTrans => {
        if(resTrans.retcode == 0) {
          let tmpDialogList = this.data.dialogList.slice(0)

          // 用新的属性更新对应的条目
          let tmpTranslate = Object.assign({}, item, {
            autoPlay: true,  // 自动播放背景音乐
            translateVoicePath: resTrans.filename,  // 语音文件路径
            translateVoiceExpiredTime: resTrans.expired_time || 0  // 语音文件过期时间
          })

          tmpDialogList[index] = tmpTranslate

          // 更新对话列表
          this.setData({
            dialogList: tmpDialogList,
          })

        } else {
          console.warn("语音合成失败", resTrans, item)
        }
      },
      fail: function(resTrans) {
        console.warn("语音合成失败", resTrans, item)
      }
  })
  },
```
​		定义了initCard函数，这个函数用于初始化一张空白的卡片。
​		然后定义了deleteItem函数，用于删除某一条目。
​		当列表为空时，deleteItem函数将会调用initCard函数创建一张空白的卡片。

```javascript
    /**
   * 初始化为空时的卡片
   */
  initCard: function () {
    // 创建新的初始化翻译对象，并添加当前时间
    let initTranslateNew = Object.assign({}, this.data.initTranslate, {
      create: util.recordTime(new Date()),
    })

    // 更新数据
    this.setData({
      initTranslate: initTranslateNew
    })
  },

  /**
   * 删除卡片
   */
  deleteItem: function(e) {
    // 获取由自定义组件触发事件提供的detail对象
    let detail = e.detail
    let item = detail.item

    // 创建一个新的对话列表副本
    let tmpDialogList = this.data.dialogList.slice(0)
    let arrIndex = detail.index

    // 删除对应索引的元素
    tmpDialogList.splice(arrIndex, 1)

    // 使用setTimeout来避免可能的错误：Expect END descriptor with depth 0 but get another
    setTimeout( ()=>{
      this.setData({
        dialogList: tmpDialogList
      })
      // 如果列表为空，则初始化卡片
      if(tmpDialogList.length == 0) {
        this.initCard()
      }
    }, 0)
  },

  /**
   * 识别内容为空时的反馈
   */
  showRecordEmptyTip: function() {
    // 更新数据
    this.setData({
      recording: false,
      bottomButtonDisabled: false,
    })

    // 显示提示
    wx.showToast({
      title: this.data.tips_language.recognize_nothing,
      icon: 'success',
      image: '/image/no_voice.png',
      duration: 1000,
      success: function (res) {

      },
      fail: function (res) {
        console.log(res);
      }
    });
  },
  
  
    /**
   * 初始化语音识别回调
   * 绑定语音播放开始事件
   */
  initRecord: function() {
    // 有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {
      let currentData = Object.assign({}, this.data.currentTranslate, {
                        text: res.result,
                      })
      // 更新当前翻译内容
      this.setData({
        currentTranslate: currentData,
      })
      // 滚动到新的内容
      this.scrollToNew();
    }

    // 识别结束事件
    manager.onStop = (res) => {
      let text = res.result

      // 如果结果为空，显示提示信息
      if(text == '') {
        this.showRecordEmptyTip()
        return
      }

      let lastId = this.data.lastId + 1

      let currentData = Object.assign({}, this.data.currentTranslate, {
                        text: res.result,
                        translateText: '正在翻译中',
                        id: lastId,
                        voicePath: res.tempFilePath
                      })

      // 更新当前翻译和记录状态
      this.setData({
        currentTranslate: currentData,
        recordStatus: 1,
        lastId: lastId,
      })

      // 滚动到新的内容
      this.scrollToNew();

      // 开始翻译
      this.translateText(currentData, this.data.dialogList.length)
    }

    // 识别错误事件
    manager.onError = (res) => {
      // 如果发生错误，停止录音并启用底部按钮
      this.setData({
        recording: false,
        bottomButtonDisabled: false,
      })
    }

    // 语音播放开始事件
    wx.getBackgroundAudioManager (res=>{
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      let src = backgroundAudioManager.src

      // 更新当前播放的音频源
      this.setData({
        currentTranslateVoice: src
      })
    })
  },

```
​		以下代码包含了对历史记录的获取和设置。
```javascript
    /**
   * 设置语音识别历史记录
   */
  setHistory: function() {
    try {
      let dialogList = this.data.dialogList
      dialogList.forEach(item => {
        item.autoPlay = false
      })
      // 尝试将对话列表存储在本地
      wx.setStorageSync('history',dialogList)
    } catch (e) {
      console.error("setStorageSync setHistory failed")
    }
  },

  /**
   * 得到历史记录
   */
  getHistory: function() {
    try {
      // 尝试从本地获取历史记录
      let history = wx.getStorageSync('history')
      if (history) {
          let len = history.length;
          let lastId = this.data.lastId
          if(len > 0) {
            lastId = history[len-1].id || -1;
          }
          // 如果历史记录存在，将其设置到dialogList中
          this.setData({
            dialogList: history,
            toView: this.data.toView,
            lastId: lastId,
          })
      }
    } catch (e) {
      // 如果出现错误，将dialogList设置为空列表
      this.setData({
        dialogList: []
      })
    }
  },

  /**
   * 重新滚动到底部
   */
  scrollToNew: function() {
    // 更新视图到最新的位置
    this.setData({
      toView: this.data.toView
    })
  },

  onShow: function() {
    // 当页面显示时，滚动到最新的位置，并初始化卡片
    this.scrollToNew();
    this.initCard()

    if(this.data.recordStatus == 2) {
      wx.showLoading({
        // title: '',
        mask: true,
      })
    }
  },

  onLoad: function () {
    // 页面加载时，获取历史记录并初始化语音识别
    this.getHistory()
    this.initRecord()
    this.setData({toView: this.data.toView})
    app.getRecordAuth()
  },

  onHide: function() {
    // 页面隐藏时，设置历史记录
    this.setHistory()
  },

  /**
   * 定义一个点击事件处理函数
   */
  onBackIconTap: function() {
    // 返回上一页
    wx.navigateBack({
      delta: 1, // 返回的页面层数
    });
  },

})


  
```
##### 2 voice_translation.json
```javascript
{
  "usingComponents": {
    "bottom-button": "/components/bottom-button/index",
    "result-bubble": "/components/result-bubble/index"
  }
}

```
##### 3 voice_translationt.wxml
```css
<!--index.wxml-->

<!-- 页面背景部分 -->
<view class="page-background">
  <image class="image self-center" src="../../imgs/voice_background.png"></image>
</view>

<!-- 主体部分，包含对话框和底部按钮 -->
<view class="container">
  
  <!-- 对话框部分 -->
  <scroll-view id="scroll-content"
    scroll-top="{{scroll_top}}"
    scroll-y="true"
    class="dialog-part"
    scroll-into-view="translate-{{toView}}"
    enable-back-to-top="true"
    scroll-with-animation="true">
    
    <!-- 空白间隔部分 -->
    <view class="spacer"></view> 
    
    <!-- 返回图标，点击触发 onBackIconTap 函数 -->
    <view id="back-icon" class="back-icon" bindtap="onBackIconTap" >
      <image src="../../imgs/arrow-left.png" class="arrow-icon"></image>
    </view>

    <!-- 语言切换部分 -->
    <view class="flex-row justify-between items-center relative group_2">
      <view class="flex-row items-center self-stretch group_3 space-x-8">
        <!-- 根据 lan_type 的值，显示不同的图片和文本 -->
        <image wx:if="{{lan_type}}" class="shrink-0 image_1" src="{{image_c}}" />
        <image wx:else class="shrink-0 image_1" src="{{image_e}}" />
        <text class="text" wx:if="{{lan_type}}">中文</text>
        <text class="text" wx:else>英文</text>

        <!-- 语言切换按钮，点击触发 changelanguage 函数 -->
        <view bindtap="changelanguage" style="display: inline-block">
          <image class="image_1 image_2" src="../../imgs/Vector.png"/>
        </view>
      </view>
    </view>

    <!-- 列表部分 -->
    <!-- 列表为空时显示的部分 -->
    <view class="dialog-wrap" id="translate-empty" wx:if="{{!recording && dialogList.length == 0}}">
      <result-bubble item="{{initTranslate}}" record-status="0"></result-bubble>
    </view>

    <!-- 列表部分 -->
    <view wx:for="{{dialogList}}" wx:key="id" class="dialog-wrap" data-index="{{index}}" catchmodaldelete="deleteItem">
      <result-bubble item="{{item}}"
        edit-show="{{index==dialogList.length-1}}"
        index="{{index}}"
        current-translate-voice="{{currentTranslateVoice}}"
        bindtranslate="translateTextAction"
        bindexpired="expiredAction"></result-bubble>
    </view>

    <!-- 正在录音时显示的部分 -->
    <view class="dialog-wrap" id="translate-recording" wx:if="{{recording}}">
      <result-bubble item="{{currentTranslate}}" record-status="{{recordStatus}}"></result-bubble>
    </view>

    <view id="translate-fake"></view>

  </scroll-view>

  <!-- 底部按钮部分 -->
  <view class="foot-group" catchlongpress="catchTapEvent">
    <bottom-button button-disabled="{{bottomButtonDisabled}}"
      bindrecordstart="streamRecord"
      bindrecordend="streamRecordEnd"></bottom-button>
  </view>
</view>

```
##### 3 voice_translation.wxss
```css
/* 主容器样式 */
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  font-family: "PingFang-SC-Regular", "SimSun", "Microsoft Yahei";
  background-color: #1494fc;
}

/* 页面样式 */
page {
  height: 100%;
  width: 100%;
  background: #FAFAFA;
}

/* 输入框样式 */
input {
  font-family: "PingFang-SC-Regular", "SimSun", "Microsoft Yahei";
}

/* flex布局，列方向 */
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

/* spacer元素样式 */
.spacer {
  height: 246rpx;
}

/* 页面背景样式 */
.page-background {
  position: fixed;
  top: 345px;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
}

/* 图片样式 */
.image {
  width: 750rpx;
  height: 348rpx;
}

/* 设置元素相对于其父元素的位置为中心 */
.self-center {
  align-self: center;
}

/* 对话框包裹样式 */
.dialog-wrap {
  position: relative;
  padding: 20rpx 40rpx 50rpx 40rpx;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
}

/* 消息详情文字样式 */
.send-message .text-detail {
  color: #9B9B9B;
}

/* 对话部分样式 */
.dialog-part {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 257rpx;
  right: 0;
  z-index:1;
}

/* 用户输入样式 */
.user-input {
  flex: 1;
  height: 60rpx;
  box-sizing: border-box;
  margin: 0 10px;
  border-radius: 10rpx;
}

/* 文本内容样式 */
.text-content {
  margin: 0 48px 0 0;
  box-sizing: border-box;
}

/* 编辑图标样式 */
.edit-icon {
  position: absolute;
  right: 10rpx;
  bottom: 0;
  padding: 0 8rpx;
}

/* 播放图标样式 */
.play-icon {
  position: absolute;
  right: 10rpx;
  bottom: 14rpx;
  padding: 0 8rpx;
  display: flex;
  align-items: center;
}

/* 声音图标样式 */
.play-loud-icon {
  position: absolute;
  right: 0;
  bottom: 14rpx;
  padding: 0 8rpx;
  display: flex;
  align-items: center;
}

/* 文字详情样式 */
.text-detail {
  font-size: 18px;
  line-height: 24px;
  font-family: "PingFang-SC-Regular", "SimSun", "Microsoft Yahei";
}

/* 返回图标样式 */
.back-icon {
  position: absolute;
  top: 50px;
  left: 20px;
  z-index:1;
}

/* 箭头图标样式 */
.arrow-icon {
  width: 30px;
  height: 30px;
}

/* 翻译消息样式 */
.translate-message {
  position: relative;
}

/* 发送消息样式 */
.send-message {
  position: relative;
}

/* 创建时间样式 */
.create-time {
  font-size: 14px;
  color: #B2B2B2;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
}

/* 模糊滤镜样式 */
.filter-blur {
  filter: blur(5px);
}

/* 空提示样式 */
.empty-tip {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 24px;
  width: 100px;
  font-size: 24px;
  color: #000000;
  opacity: 0.1
}

/* 伪翻译样式 */
.translate-fake {
  width:100%;
  height:1px;
}

/* 底部分组样式 */
.foot-group {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 40;
  width: 100%;
}

/* 分组样式 */
.group_2 {
  margin-top: -76rpx;
}

.group_3 {
  margin-left: 220rpx;
}

/* 空间间隔样式 */
.space-x-8 > view:not(:first-child),
.space-x-8 > text:not(:first-child),
.space-x-8 > image:not(:first-child) {
  margin-left: 16rpx;
}

/* 图片样式 */
.image_1 {
  width: 32rpx;
  height: 32rpx;
}

/* 文本样式 */
.text {
  color: #ffffff;
  font-size: 32rpx;
  font-family: Poppins;
  line-height: 29rpx;
  margin-right: 50rpx;
}

/* 第二张图片样式 */
.image_2 {
  margin-right: 230rpx;
}

```

### 4.1.5 TDD_test_cdt/

```javascript
 translateText: function(item, index) {
    let lfrom =  item.lfrom || 'zh_CN'
    let lto = item.lto || 'en_US'

    plugin.translate({
      lfrom: lfrom,
      lto: lto,
      content: item.text,
      tts: true,
      success: (resTrans)=>{

        let passRetcode = [
          0, // 翻译合成成功
          -10006, // 翻译成功，合成失败
          -10007, // 翻译成功，传入了不支持的语音合成语言
          -10008, // 翻译成功，语音合成达到频率限制
        ]

        if(passRetcode.indexOf(resTrans.retcode) >= 0 ) {
          let tmpDialogList = this.data.dialogList.slice(0)

          if(!isNaN(index)) {

            let tmpTranslate = Object.assign({}, item, {
              autoPlay: true, // 自动播放背景音乐
              translateText: resTrans.result,
              translateVoicePath: resTrans.filename || "",
              translateVoiceExpiredTime: resTrans.expired_time || 0
            })

            tmpDialogList[index] = tmpTranslate


            this.setData({
              dialogList: tmpDialogList,
              bottomButtonDisabled: false,
              recording: false,
            })

            this.scrollToNew();

          } else {
            console.error("index error", resTrans, item)
          }
        } else {
          console.warn("翻译失败", resTrans, item)
        }

      },
      fail: function(resTrans) {
        console.error("调用失败",resTrans, item)
        this.setData({
          bottomButtonDisabled: false,
          recording: false,
        })
      },
      complete: resTrans => {
        this.setData({
          recordStatus: 1,
        })
        wx.hideLoading()
      }
    })

  },
```

### 4.1.6 TDD_test_zxk/

#### 4.1.6.1 node_modules

> Mocha 测试框架调用的npm组件

#### 4.1.6.2 translate.js

基于TDD测试开发的获取文本翻译内容的JavaScript代码。

```javascript
// translate.js
const axios = require('axios');
const md5 = require('md5');

async function translate(inputText, sourceLang, targetLang) {
    if (!inputText) {
        throw new Error('Invalid input');
    }

    const appid = '';
    const secretKey = '';
    const salt = (new Date()).getTime();
    const text_encode = encodeURIComponent(inputText);
    const str1 = appid + text_encode + salt + secretKey;
    const sign = md5(str1);

    const response = await axios.post('https://fanyi-api.baidu.com/api/trans/vip/translate', {
        q: text_encode,
        from: sourceLang,
        to: targetLang,
        appid: appid,
        salt: salt,
        sign: sign,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if (response.data.error_code) {
        throw new Error(`Translation failed: ${response.data.error_msg}`);
    }

    return response.data.trans_result[0].dst;
}

module.exports = translate;
```

#### 4.1.6.3 ranslate.test.js

基于Mocha框架编写的测试文本翻译Javascript的测试程序。

```javascript
// 引入测试库
const assert = require('assert');
const translate = require('./translate');

describe('translate function', function() {
    it('should translate "software" to Chinese correctly', async function() {
        const result = await translate('software', 'en', 'zh');
        assert.strictEqual(result, '软件');
    });

    it('should translate "software@" to Chinese correctly', async function() {
        const result = await translate('software', 'en', 'zh');
        assert.strictEqual(result, '软件@');
    });

    it('should handle space correctly', async function() {
        const result = await translate('hello world', 'en', 'zh');
        assert.strictEqual(result, '你好世界');
    });

    it('should handle error correctly', async function() {
        try {
            await translate('', 'en', 'zh');
        } catch (e) {
            assert.strictEqual(e.message, 'Invalid input');
        }
    });
});
```

### 4.1.7 utils/

#### 4.1.7.1 utils/api.js

这段代码在utils/目录内继承了所需要用到的api服务，在小程序内需要用到时可以直接调用，提高了代码的可读性与可维护性。

```javascript
import md5 from './md5.min.js'

const appid = '20230428001660105' //注册百度翻译api
const key = 'cVKXtU5tdGp8YDBPghkX' //注册百度翻译api

function translate(q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }) {
    //表示默认传递参数传递的值
    return new Promise((resolve, reject) => {
        let salt = Date.now() //随机数
        let sign = md5(`${appid}${q}${salt}${key}`) //拼接 MD5进行加密
        wx.request({
            url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
            data: {
                q, //待翻译文本
                from, //待翻译的原始语言
                to, //待翻译成的目标语言
                appid,
                salt, //随机数
                sign //拼接 MD5进行加密
            },
            success(res) {
                if (res.data && res.data.trans_result) {
                    resolve(res.data)
                } else {
                    reject({ status: 'error', msg: '翻译失败' })
                    wx.showToast({
                        title: '翻译失败',
                        icon: 'none',
                        duration: 3000
                    })
                }
            },
            fail() {
                reject({ status: 'error', msg: '翻译失败' })
                wx.showToast({
                    title: '网络异常',
                    icon: 'none',
                    duration: 3000
                })
            }
        })
    })
}

function getPicBase64(tempFilePath) {
    return new Promise(function(resolve, reject) {
        wx.getFileSystemManager().readFile({
            filePath: tempFilePath,
            encoding: "base64",
            success: function(data) {
                console.log(data); //返回base64编码结果，但是图片的话没有data:image/png
                resolve(data);
            }
        })
    })
}

function getPicToWord(src) {
    return new Promise(function(resole, reject) {
        wx.request({
            url: 'https://api.jisuapi.com/generalrecognition/recognize?appkey=993bfd80d8ac15c6',
            data: {
                pic: src,
                type: "cnen"
            },
            success: function(res) {
                console.log(res);
                resole(res);
            },
            fail: function(res) {
                console.log(res);
                reject(res);
            }
        })
    })
}

module.exports = {
    translate: translate,
    getPicBase64: getPicBase64,
    getPicToWord: getPicToWord
}
```
#### 4.1.7.2 utils/conf.js

语音翻译的语言配置

```json
let language = [
    {
        id: 0,
        lang_name: "中文",
        lang_content: "zh_CN",
        lang_to: ["en_US"],
        max_length: 300,
        source_language: "输入文字",
        target_language: "输出文字",
        hold_talk: "长按说话",
        keyboard_input: "键盘输入",
        type_here: "输入文字",
        bg_content: "请输入翻译内容",
        record_failed: "录制失败",
        recognize_nothing: "请说话",
        time_left: "录音输入倒数",
        text_left: "剩余文本长度",
        prompt_time: "提示秒数",
        upload_failed: "上传失败",
        translating: "翻译中",
        text_limit: "限制长度",
        input_tip: "请输入有效文字",
        request_failed: "请求失败",
        delete_tip: "删除该项",
        cancel: "取消",
        bubble_tip: "请输入文本",
        bg_bubble: "正在听你说话",
        copy_source_text: "复制原文",
        copy_target_text: "复制译文",
        delete_item: "删除",
        exceed_network: "网络请求失败",
        retry_network: "尝试重新连接",
        wait_last_record: "请等待翻译结束",
        access_auth: "请检查权限",
        access_network: "网络错误",
        login: "登录",
    },
];

module.exports = {
    language: language,
};

```

#### 4.1.7.3 md5.min.js

这段代码用于获取字符串的十六进制32位下的MD5。

```javascript
! function(n) {
    "use strict";

    function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r }

    function r(n, t) { return n << t | n >>> 32 - t }

    function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) }

    function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) }

    function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) }

    function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) }

    function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) }

    function i(n, r) {
        n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
        var e, i, a, d, h, l = 1732584193,
            g = -271733879,
            v = -1732584194,
            m = 271733878;
        for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
        return [l, g, v, m]
    }

    function a(n) {
        var t, r = "",
            e = 32 * n.length;
        for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r
    }

    function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r }

    function h(n) { return a(i(d(n), 8 * n.length)) }

    function l(n, t) {
        var r, e, o = d(n),
            u = [],
            c = [];
        for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
        return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
    }

    function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e }

    function v(n) { return unescape(encodeURIComponent(n)) }

    function m(n) { return h(v(n)) }

    function p(n) { return g(m(n)) }

    function s(n, t) { return l(v(n), v(t)) }

    function C(n, t) { return g(s(n, t)) }

    function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) }
    "function" == typeof define && define.amd ? define(function() { return A }) : "object" == typeof module && module.exports ? module.exports = A : n.md5 = A
}(this);
```

#### 4.1.7.4 util.js

这段代码中定义了三个函数：formatTime，recordTime，和formatNumber。

- formatTime函数接收一个date对象作为参数，获取date对象的年、月、日、时、分、秒，并将它们格式化为字符串。
- recordTime只获取date对象的月、日、时、分，并将它们格式化为字符串。		
- formatNumber函数接收一个数值n作为参数，将其转化为字符串并检查是否需要在前面补0。
- 通过module.exports将formatTime和recordTime两个函数导出，使得它们可以在其他文件中被引用。

```javascript
const formatTime = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function recordTime(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    return [month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
}

const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

module.exports = {
    formatTime: formatTime,
    recordTime: recordTime
}
```

### 4.1.8 ./

#### 4.8.8.1 ./app.js

在全局的`App`对象中，`onLaunch`函数定义了当小程序启动时的操作，例如从本地获取当前语言和历史记录。`getRecordAuth`函数则用于获取录音权限。`onHide`函数定义了当小程序隐藏时的操作，例如停止后台音频。`globalData`对象则定义了全局的数据，包括历史记录、当前语言、按钮列表、图片的Base64编码、词语列表和语言列表等。

在语言列表`langList`中，每个元素都是一个对象，包含了语言的中文名（`chs`）、语言代码（`lang`）、索引（`index`）、和图标源（`src`，对于部分语言）。其中，语言代码是用于识别和设置语言的标识，索引是语言在列表中的位置，图标源是显示语言图标的URL地址。每一个对象代表一种语言。在这个应用中，`langList`定义了全局支持的语言列表，包括英语、中文、日语等。每种语言的定义都包括中文名(`chs`)、语言代码(`lang`)和语言在列表中的索引(`index`)。部分语言定义还包括了图标的URL地址(`src`)，用于在界面上显示对应的图标。

```javascript
// 导入工具模块
const utils = require('./utils/util.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    // 在全局数据中设置当前语言，如果本地没有存储过当前语言，那么就使用语言列表的第一个语言
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0];
    this.globalData.fromLang = wx.getStorageSync('fromLang') || this.globalData.langList[1];
    
    // 从本地获取历史记录，如果获取失败，则将全局的历史记录设置为空数组
    wx.getStorage({
      key: 'history',
      success: (res) => {
        this.globalData.history = res.data
      },
      fail: (res) => {
        console.log("get storage failed")
        console.log(res)
        this.globalData.history = []
      }
    })
  },
  // 权限询问
  // 获取录音权限
  getRecordAuth: function () {
    wx.getSetting({
      success(res) {
        console.log("succ")
        console.log(res)
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能
              console.log("succ auth")
            },
            fail() {
              console.log("fail auth")
            }
          })
        } else {
          console.log("record has been authed")
        }
      },
      fail(res) {
        console.log("fail")
        console.log(res)
      }
    })
  },

  onHide: function () {
    // 当小程序隐藏时，停止后台音频
    wx.stopBackgroundAudio()
  },

  // 定义全局的数据
  globalData: {
    history: [],
    curLang: {},
    formLang:{},
    buttons:[],
    picBase64: "",
    word: [],   
  // langList定义了支持的语言列表
    langList: [{
    'chs': '英文',   // 语言的中文名
    "lang": 'en',   // 语言的代码
    "index": 0,     // 语言在列表中的索引
  // 语言的图标URL，如果没有指定，那么将不显示图标
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/1117504288074e5a51c1cc92bf0eeadb.png"
    },
    {
      'chs': '中文',
      'lang': 'zh',
      "index": 1,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/ac7f93cc16a6602c18750922cf92014c.png"
    },
    {
      'chs': '日语',
      'lang': 'jp',
      "index": 2
    },
    {
      'chs': '韩语',
      'lang': 'kor',
      "index": 3,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/16826823185920520575.png"
    },
    {
      'chs': '法语',
      'lang': 'fra',
      "index": 4
    },
    {
      'chs': '德语',
      'lang': 'de',
      "index": 5,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/16826823185577922182.png"
    },
    {
      'chs': '俄语',
      'lang': 'ru',
      "index": 6
    },
    {
      'chs': '泰语',
      'lang': 'th',
      "index": 7
    },
    {
      'chs': '西班牙语',
      'lang': 'spa',
      "index": 8
    },
    {
      'chs': '阿拉伯语',
      'lang': 'ara',
      "index": 9
    },
    {
      'chs': '意大利语',
      'lang': 'it',
      "index": 10
    },
    {
      'chs': '葡萄牙语',
      'lang': 'pt',
      "index": 11
    }
    ]
  }
})

```

#### 4.8.8.2 ./app.json

这段代码是微信小程序的配置文件`app.json`中的一部分。`app.json`是小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、多 tab 等等。简单解释一下，这段代码配置了小程序的页面、窗口表现、使用的插件、sitemap 文件位置以及底部 tab 栏的表现。其中，`pages`数组包含了所有页面的路径，`window`对象设置了全局窗口的外观，`plugins`对象声明了小程序使用的插件，`sitemapLocation`字符串指明了sitemap 文件的位置，`tabBar`对象则描述了底部 tab 栏的表现。

```json
{
    // 小程序所有页面的路径数组
    "pages": [
        "pages/index/index",
        "pages/history/history",
        "pages/OCR/OCR",
        "pages/getPic/getPic",
        "pages/voice_translation/voice_translation",
        "pages/edit/edit",
        "pages/choose_language/choose_language"
    ],

    // 全局的默认窗口表现
    "window": {
        "backgroundTextStyle": "light",  // 下拉背景字体、loading 图的样式
        "navigationBarBackgroundColor": "#1493FC",  // 导航栏背景颜色
        "navigationBarTitleText": "TransWe",  // 导航栏标题文字内容
        "navigationBarTextStyle": "black",  // 导航栏标题颜色
        "backgroundColor": "#4b3c96",  // 窗口的背景颜色
        "navigationStyle": "custom"  // 导航栏样式
    },

    // 插件的声明
    "plugins": {
        "WechatSI": {
            "version": "0.3.3",  // 插件的版本
            "provider": "wx069ba97219f66d99"  // 插件的提供者
        }
    },

    "sitemapLocation": "sitemap.json",  // 小程序的站点地图文件位置

    // 底部 tab 栏的表现
    "tabBar": {
        "borderStyle": "white",  // tab 的边框颜色
        "position": "bottom",  // tab 的位置
        "color": "#bfbfbf",  // tab 的默认颜色
        "selectedColor": "#1c1b21",  // tab 被选中时的颜色
        "list": [  // tab 的列表，顺序与显示的顺序一致
            {
                "pagePath": "pages/index/index",
                "text": "翻译",
                "iconPath": "imgs/icon-1.png",  // 未选中时的图标路径
                "selectedIconPath": "imgs/sel-icon-1.png"  // 选中时的图标路径
            },
            {
                "pagePath": "pages/getPic/getPic",
                "text": "拍照翻译",
                "iconPath": "imgs/paizhao-xianxing.png",
                "selectedIconPath": "imgs/paizhao.png"
            },
            {
              "pagePath": "pages/voice_translation/voice_translation",
              "text": "语音翻译",
              "iconPath": "imgs/maikefeng-xianxing.png",
              "selectedIconPath": "imgs/maikefeng.png"
            },
            {
                "pagePath": "pages/history/history",
                "text": "历史",
                "iconPath": "imgs/icon-2.png",
                "selectedIconPath": "imgs/sel-icon-2.png"
            }
        ]
    }
}

```

#### 4.8.8.3 ./app.wxss

这段代码是微信小程序的全局样式表`app.wxss`中的一部分。`.wxss`是微信小程序的样式语言，类似于 Web 的 CSS，可以设置小程序中的组件样式。这里定义了全局的样式规则，将在整个小程序范围内生效。

这段代码的主要作用是：

- 定义了全局容器的样式，例如背景色、字体颜色和大小、布局方式等。
- 定义了版权信息的样式，例如字体颜色和大小、在容器中的位置等。
- 定义了视图在悬停时的背景颜色。

```css
/* 引入 iconfont 的样式文件 */
@import "./assets/iconfont/iconfont.wxss";

/* 容器样式 */
.container {
  padding: 0;  /* 容器内边距设置为 0 */
  background-color:#f7f8f9;  /* 容器背景色 */
  height: 100vh;  /* 容器高度设置为视口高度的100% */
  display: flex;  /* 设置为弹性布局 */
  flex-direction:column;  /* 设置主轴方向为垂直方向 */
  box-sizing: border-box;  /* 盒模型设置为 border-box，即元素的 padding 和 border 在元素宽高内 */
  font-size: 30rpx;  /* 字体大小设置为 30rpx */
  color: #333;  /* 字体颜色 */
} 

/* 版权信息样式 */
.copyright {
  align-self: center;  /* 版权信息在交叉轴方向居中对齐 */
  flex: 1;  /* flex 值为 1，使版权信息元素占据剩余的空间 */
  display: flex;  /* 设置为弹性布局 */
  align-items: flex-end;  /* 在交叉轴方向上，版权信息位于容器的底部 */
  padding-bottom: 20rpx;  /* 底部内边距设置为 20rpx */
  font-size: 28rpx;  /* 字体大小设置为 28rpx */
  color:#999;  /* 字体颜色 */
}

/* 视图悬停样式 */
.view-hover {
  background-color: #f3f3f3!important;  /* 视图的背景色设置为#f3f3f3，!important 表示优先级最高，如果有其他样式影响，该规则将覆盖其他规则 */
}

```

#### 4.8.8.4 ./project.config.json

这段代码是微信小程序的项目配置文件 `project.config.json` 的一部分。`project.config.json` 是微信小程序的项目配置文件，用于配置项目的相关信息，包括项目名，appid，编译设置等。

这个文件对于小程序项目的运行具有重要影响。例如，`appid` 字段设置了小程序的唯一标识，`es6` 字段决定了是否需要将 ES6 代码转为 ES5 代码以适应更多环境，`minified` 字段决定了是否需要压缩代码等。

```json
{
  "description": "项目配置文件。",  // 项目描述
  "packOptions": {  // 打包配置项
    "ignore": [],  // 打包时需要忽略的文件列表
    "include": []  // 打包时需要包含的文件列表
  },
  "setting": {  // 设置项
    "urlCheck": false,  // 是否开启url合法性检查
    "es6": true,  // 是否启用ES6转ES5功能
    "postcss": true,  // 是否启用PostCSS
    "minified": true,  // 是否压缩代码
    "ignoreDevUnusedFiles": false,  // 是否忽略开发模式下未引用的资源文件
    "ignoreUploadUnusedFiles": false,  // 是否忽略上传模式下未引用的资源文件
    "newFeature": true,  // 是否启用新的编译功能
    "babelSetting": {  // Babel 编译配置
      "ignore": [],  // 需要忽略编译的文件列表
      "disablePlugins": [],  // 需要禁用的插件列表
      "outputPath": ""  // 编译输出路径
    },
    "condition": false,  // 条件编译
    "skylineRenderEnable": false  // 是否开启3D渲染模式
  },
  "compileType": "miniprogram",  // 编译类型为小程序
  "libVersion": "2.32.0",  // 使用的基础库版本
  "appid": "wx365790a8c04e3a3b",  // 小程序的appid
  "projectname": "TransWe",  // 项目名称
  "simulatorType": "wechat",  // 模拟器类型为微信
  "simulatorPluginLibVersion": {},  // 插件库版本（用于模拟器）
  "condition": {},  // 调试配置
  "editorSetting": {  // 编辑器设置
    "tabIndent": "insertSpaces",  // 设置缩进为插入空格
    "tabSize": 2  // 设置缩进大小为2个空格
  }
}

```

#### 4.8.8.5 ./project.private.config.json

这段代码是微信小程序的 `project.private.config.json` 文件的一部分。这个文件是一个私有配置文件，用于覆盖 `project.config.json` 中的同名字段，存储开发者在开发工具中改动的项目配置。当 `project.private.config.json` 与 `project.config.json` 中的字段冲突时， `project.private.config.json` 的配置项会优先被应用。

这个配置文件有助于个别开发者或者团队在本地进行特定的设置，比如禁止URL检查或者开启热重载等，并且不会影响到其他的开发人员。

```json
{
  // 项目描述，指出这是一个私有配置文件
  "description": "项目私有配置文件。此文件中的内容将覆盖 project.config.json 中的相同字段。项目的改动优先同步到此文件中。详见文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",
  // 项目名称
  "projectname": "TransWe",
  // 设置项
  "setting": {
    // 是否启用编译热更新
    "compileHotReLoad": true,
    // 是否开启URL合法性检查
    "urlCheck": false
  },
  // 调试配置
  "condition": {}
}
```

## 4.2 系统测试

### 4.2.1 TDD测试

#### 4.2.1.1 TDD_test_cdt/

> 语音翻译测试

1. 测试用例（中翻英）

| 输入               | 期望输出                                      |
| ------------------ | --------------------------------------------- |
| 华中科技大学       | Huazhong University of Science and Technology |
| 我来自武汉         | I am from Wuhan                               |
| 如何进入校园       | How to enter the campus                       |
| 用户的要求是绝对的 | User requirements are absolute                |

2. 测试结果

- 测试点1

<div align = "center">
    <img src="../pics/SS_TDD_VoiceTrans_1.png" width="50%" />
</div>

- 测试点2

<div align = "center">
    <img src="../pics/SS_TDD_VoiceTrans_2.png" width="50%" />
</div>

- 测试点3

<div align = "center">
    <img src="../pics/SS_TDD_VoiceTrans_3.png" width="50%" />
</div>



- 测试点4

<div align = "center">
    <img src="../pics/SS_TDD_VoiceTrans_4.png" width="50%" />
</div>

测试通过数（4/4）

#### 4.2.1.2 TDD_test_zxk/

基于Mocha框架编写的测试文本翻译Javascript的测试程序。

```javascript
// 引入测试库
const assert = require('assert');
const translate = require('./translate');

describe('translate function', function() {
    it('should translate "software" to Chinese correctly', async function() {
        const result = await translate('software', 'en', 'zh');
        assert.strictEqual(result, '软件');
    });

    it('should translate "software@" to Chinese correctly', async function() {
        const result = await translate('software', 'en', 'zh');
        assert.strictEqual(result, '软件@');
    });

    it('should handle space correctly', async function() {
        const result = await translate('hello world', 'en', 'zh');
        assert.strictEqual(result, '你好世界');
    });

    it('should handle error correctly', async function() {
        try {
            await translate('', 'en', 'zh');
        } catch (e) {
            assert.strictEqual(e.message, 'Invalid input');
        }
    });
});
```

若要进行测试，请在正确安装相关框架的情况下运行：

```shell
mocha .\translate.test.js
```

测试成功会显示下列截图：

![](../pics/Mocha_success.png)

# 5. 系统界面展示

## 5.1 index | 主页

在主页中：

-  用户在输入框中输入待翻译的文本，**程序会自动检测输入语言**，用户在下拉菜单中选择相应的目标语言。
-  用户也可以**手动选择输入语言**。输入完成后，程序将进行翻译并在输出框中显示翻译结果。
-  用户可以点击小喇叭按钮，调用语音合成功能，听到翻译结果。
-  用户可以点击剪贴板按钮，待翻译文本或翻译结果会自动复制到用户的剪贴板。
-  用户可以点击下方的翻译历史板块，跳转到翻译历史页面。
-  用户可以点击最下方的导航栏跳转到对应的界面。

<div align = "center">
    <img src="../pics/ScreenShots/SS_index_1.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_index_2.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_index_3.jpg" width="30%" />
</div>

## 5.2 choose_language | 选择语言界面

​		在选择语言界面选择翻译语言和目标语言

<div align = "center">
    <img src="../pics/ScreenShots/SS_chooselanguage1.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_chooselanguage4.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_chooselanguage3.jpg" width="30%" />
</div>




​		可以看到，翻译页面根据语言选择进行了及时的更新

<div align = "center">
    <img src="../pics/ScreenShots/SS_chooselanguage2.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_chooselanguage5.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_chooselanguage6.jpg" width="30%" />
</div>

## 5.3 getPic | 拍照界面

在这个界面，用户点击拍照按钮可以进行拍照，并进入拍照翻译的结果页面。

<div align = "center">
    <img src="../pics/ScreenShots/SS_getPic.jpg" width="30%" />
</div>

## 5.4 OCR | 拍照翻译结果

在这个界面，点击翻译图片，小程序会进行OCR识别并进行翻译，将结果显示在屏幕上。

<div align = "center">
    <img src="../pics/ScreenShots/SS_OCR.jpg" width="30%" />
</div>



## 5.5  voice_translation | 语音翻译页面

语音翻译页面，点击切换按钮改变录音语言。

<div align = "center">
    <img src="../pics/cdt/SS_voice1.jpg" width="30%" />
    <img src="../pics/cdt/SS_voice2.jpg" width="30%" />
</div>

长按录音按钮，按钮样式改变，出现文字提示正在录音，翻译的结果会以卡片的形式保存在本地。

<div align = "center">
    <img src="../pics/ScreenShots/SS_voice3.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_voice4.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_voice5.jpg" width="30%" />
</div>




在卡片右侧对应两个组件，分别代表编辑文本和语音合成。

<div align = "center">
    <img src="../pics/ScreenShots/SS_voice6.png" width="30%" />
    <img src="../pics/ScreenShots/SS_voice11.jpg" width="30%" />
</div>


长按卡片出现弹窗，功能包括复制文本以及删除不用的卡片。

<div align = "center">
    <img src="../pics/ScreenShots/SS_voice12.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_voice13.jpg" width="30%" />
     <img src="../pics/ScreenShots/SS_voice14.jpg" width="30%" />
</div>

## 5.6 edit | 文本编辑界面

考虑到用户录音时可能会因为录音失误导致录入的文本有误，为避免用户重新录音的麻烦，允许编辑录音文本，为用户带来更好的体验。

<div align = "center">
    <img src="../pics/ScreenShots/SS_voice7.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_voice8.jpg" width="30%" />
</div>


设置了最大输入文本限制，用户可以看到剩余可输入文字，点击清空按钮可以快速清除文字

<div align = "center">
    <img src="../pics/ScreenShots/SS_voice9.jpg" width="30%" />
    <img src="../pics/ScreenShots/SS_voice10.jpg" width="30%" />
</div>

## 5.7 history | 翻译历史

在这个界面，用户可以查看使用小程序的翻译历史，点击对应的翻译历史可以跳转到主页查看翻译结果。

<div align = "center">
    <img src="../pics/ScreenShots/SS_history.jpg" width="30%" />
</div>

# 6. 总结

在这个课程设计项目中，我们的团队开发了一个名为TransWe的微信小程序。这是一个强大的机器翻译工具，它的核心功能是能够快速准确地翻译各种语言。但是，我们并没有止步于此，我们还集成了第三方OCR、语音识别和语音合成服务，这些功能的加入使得TransWe不仅仅是一个翻译工具，更是一个全方位的语言服务平台，为用户提供了更便捷、高效的翻译服务。

在这个过程中，我们深入了解了微信小程序的开发流程和特性。微信小程序的特性如页面跳转、图片上传、音频播放等，都被我们充分利用，以实现TransWe的各项功能。同时，我们也学习了如何利用第三方服务来增强小程序的功能性和用户体验。例如，我们利用OCR服务实现了图片中文本的识别，利用语音识别和语音合成服务实现了语音翻译功能，这些都大大提高了TransWe的用户体验。

在代码实现方面，我们遵循了良好的编程习惯。我们的代码结构清晰，每个函数、每个模块都有其明确的职责；我们的命名规范，变量名、函数名都能准确地反映其功能；我们的注释详细，每一段重要的代码都有相应的注释，方便后续的维护和修改。这些都是我们在软件工程课程中学到的重要知识，也是我们在实际开发过程中得到应用的地方。

然而，这个项目的开发过程并非一帆风顺。我们遇到了一些挑战，如API调用的问题、图片大小限制的问题等。但是，我们并没有因此而退缩，我们通过查阅文档、搜索解决方案、反复测试等方式，最终都成功地解决了这些问题。这个过程不仅锻炼了我们的问题解决能力，也让我们更加深入地理解了软件开发的实际过程。

总的来说，这个课程设计项目是一次非常宝贵的实践经验。它不仅提升了我们的编程技能，也锻炼了我们的问题解决能力。同时，看到自己的作品能够真正地帮助到用户，也是一种非常满足的感觉。我们深感，软件开发不仅仅是编写代码，更是解决问题，满足用户需求的过程。**我们将带着这次的经验和教训，继续在软件工程的道路上探索和前进。**

