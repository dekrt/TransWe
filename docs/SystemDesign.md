<h1 align="center">系统设计文档</h1>

 ## 一、系统分析 

我们的翻译小程序采用分层架构的架构模式，架构示意图如下：

![](../pics/System_Architecture.png)

### 1.1 表示层（Presentation Layer）

表示层是用户与系统交互的界面，包括用户界面、数据输入、输出等。这一层主要负责将用户请求传递给下一层，并将处理结果返回给用户。在我们的翻译软件中，表示层包括用户输入文本的界面、显示翻译结果的界面、对翻译结果进行输出的页面等，以及获取用户的授权信息。

### 1.2 应用层（Application Layer） 

应用层是系统的核心层，它实现了翻译的核心算法和业务逻辑，包括文本处理、翻译算法等。这一层主要负责接收并处理表示层传递的请求，然后调用其他层的服务，最后将处理结果返回给表示层。在我们的小程序中，应用层负责：

1. 获取用户输入：
   - 手动输入
   - OCR识别
   - 语音输入
2. 获取输出结果：
   - 文本输出
   - 语音合成输出

### 1.3 服务层（Service Layer） 

服务层为应用层提供支持，包括网络通信、数据访问、存储等服务。这一层主要负责处理数据的存储和访问，以及与其他系统的交互。在我们的翻译软件中，服务层可以包括调用翻译接口获取翻译结果、调取OCR接口获取OCR识别结果、调取语音合成API对翻译结果进行语音输出等。

总的来说，以上三个层级构成了一个完整的翻译软件系统，每个层级都负责不同的功能，各司其职。这种分层架构模式使得系统更加清晰、易于扩展和维护。

## 二、组件设计

<div align = "center">
    <img src="../pics/../pics/Package_Diagram.png" />
</div>

## 三、组件接口设计

### 3.1 数据库接口

<div align = "center">
    <img src="../pics/Interface_DataBase.png" />
</div>

- `saveTranslationRecord(record: TranslationRecord): void`：保存翻译记录。
- `getTranslationRecords(userId: String): List<TranslationRecord>`：获取指定用户的翻译记录列表。

### 3.2 语言设置接口



<div align = "center">
    <img src="../pics/Interface_LanguageSetting.png" />
</div>

- `sourceLanguage: String`：源语言属性。
- `targetLanguage: String`：目标语言属性。
- `setSourceLanguage(sourceLanguage: String): void`：设置源语言。
- `setTargetLanguage(targetLanguage: String): void`：设置目标语言。
- `getSourceLanguage(): String`：获取源语言。
- `getTargetLanguage(): String`：获取目标语言。

### 3.3 OCR翻译接口



<div align = "center">
    <img src="../pics/Interface_OCRTranslation.png" />
</div>

- `recognizeImage(image: ImageData, sourceLanguage: String, targetLanguage: String): String`：将图像数据识别为文本，并将其翻译成指定的目标语言。

### 3.4 语音翻译接口



<div align = "center">
    <img src="../pics/Interface_Speech_Translation.png" />
</div>

- `recognizeSpeech(audio: AudioData, sourceLanguage: String, targetLanguage: String): String`：将音频数据识别为文本，并将其翻译成指定的目标语言。

### 3.5 文本翻译接口



<div align = "center">
    <img src="../pics/Interface_TextTranslation.png" />
</div>

- `translateText(text: String, sourceLanguage: String, targetLanguage: String): String`：将指定的文本翻译成指定的目标语言。

### 3.6 用户界面接口



<div align = "center">
    <img src="../pics/Interface_UserInterface.png" />
</div>

- `showTextInputBox(): void`：显示文本输入框。
- `showTranslationResult(text: String): void`：显示翻译结果。
- `showVoiceInputButton(): void`：显示语音输入按钮。
- `showOCRButton(): void`：显示 OCR 按钮。
- `showHistoryButton(): void`：显示历史记录按钮。
- `showVoiceAndCopy(): void`：显示语音合成和复制按钮。

### 3.7 语音录入接口



<div align = "center">
    <img src="../pics/Interface_VoiceAndCopy.png" />
</div>

- `getVoice(text: String, targetLanguage: String): AudioData`：将指定的文本转换为语音，并返回音频数据。
- `copyText(text: String): void`：将指定的文本复制到剪贴板。

### 3.8 页面控制接口

<div align = "center">
    <img src="../pics/Interface_PageController.png" />
</div>

- `+getToPage(page: String)`：表示该接口具有一个公共方法 `getToPage`，该方法接受一个参数 `page`，类型为 `String`，用于获取指定页面的内容。

### 3.9 API信息配置接口

<div align = "center">
    <img src="../pics/Interface_API_Info_Config.png" />
</div>

- `-api_config: ApiConfig`：表示该接口具有一个私有属性 `api_config`，其类型为 `ApiConfig`。私有属性只能在该类内部访问。
- `+setApiConfig(api_config : ApiConfig)`：表示该接口具有一个公共方法 `setApiConfig`，该方法接受一个参数 `api_config`，类型为 `ApiConfig`，用于设置 `api_config` 的值。
- `+getApiConfig(): ApiConfig`：表示该接口具有一个公共方法 `getApiConfig`，该方法返回 `api_config` 的值，类型为 `ApiConfig`。

### 3.10 翻译记录

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

## 四、 系统流程分析

> 采用 PlantUML & drawio 进行绘制

<div align = "center">
    <img src="../pics/UseCase.png" width = "40%"/>
</div>

结合上述用例图，我们得出以下的时序图：

### 4.1 文本翻译时序图

<div align = "center">
    <img src="../pics/Sequence_Text_Translation.png" />
</div>

### 4.2 拍照翻译时序图

<div align = "center">
    <img src="../pics/Sequence_OCR_Translation.png" />
</div>

### 4.3 语音翻译时序图

<div align = "center">
    <img src="../pics/Sequence_Speech_Recognition.png" />
</div>

### 4.4 语音合成时序图

<div align = "center">
    <img src="../pics/Sequence_Speech_Synthesis.png" />
</div>

### 4.5 查看翻译历史时序图

<div align = "center">
    <img src="../pics/Sequence_Get_Translation_History.png" />
</div>




