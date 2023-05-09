<h1 align="center">API接口文档</h1>

## 1 通用翻译接口

### 接口API：

    https://fanyi-api.baidu.com/api/trans/vip/translate

#### 接口入参 - UserInfoQueryRequest

- 请求方式： 可使用 GET 或 POST 方式，如使用 POST 方式，Content-Type 指定为：application/x-www-form-urlencoded
- 字符编码：统一采用 UTF-8 编码格式
- query 长度：为保证翻译质量，请将单次请求长度控制在 6000 bytes以内（汉字约为输入参数 2000 个）

| 字段名 |  类型  | 是否必填 |     描述      |
| :----: | :----: | :------: | :-----------: |
|   q    | string |    是    | 请求翻译query |
|  from  | string |    是    |  翻译源语言   |
|   to   | string |    是    | 翻译目标语言  |
| appid  | string |    是    |     APPID     |
|  salt  | string |    是    |    随机数     |

#### 接口出参 - UserInfoQueryResponse

- 返回的结果是json格式，包含以下字段：

|       字段名       |  类型   |   描述   | 备注                                                         |
| :----------------: | :-----: | :------: | ------------------------------------------------------------ |
|        from        | string  |  源语言  | 返回用户指定的语言，或者自动检测出的语种（源语言设为auto时） |
|         to         | string  | 目标语言 | 返回用户指定的目标语言                                       |
|    trans_result    |  array  | 翻译结果 | 返回翻译结果，包括src和dst字段                               |
| trans_result.*.src | string  |   原文   | 接入举例中的“apple”                                          |
| trans_result.*dst  | string  |   译文   | 接入举例中的“苹果”                                           |
|     error_code     | integer |  错误码  | 仅当出现错误时显示                                           |

### **接入举例**

例如：将英文单词 apple 翻译成中文：

#### **请求参数**：

​     q=apple
​     from=en
​     to=zh
​     appid=2015063000000001（请替换为您的appid）
​     salt=1435660288（随机码）
​     平台分配的密钥: 12345678

#### **生成签名sign：**

- Step1. 拼接字符串1：
  拼接appid=2015063000000001+q=apple+salt=1435660288+密钥=12345678得到字符串1：“2015063000000001apple143566028812345678”
- Step2. 计算签名：（对字符串1做MD5加密）
  sign=MD5(2015063000000001apple143566028812345678)，得到sign=f89f9594663708c1605f3d736d01d2d4

#### **拼接完整请求：**

```
http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=2015063000000001&salt=1435660288&sign=f89f9594663708c1605f3d736d01d2d4
```

注：也可使用 POST 方式，如 POST 方式传送，Content-Type 请指定为：application/x-www-form-urlencoded

6.1 通用翻译接口

### **输出举例**

#### **正确情况**：

```
{
    "from": "en",
    "to": "zh",
    "trans_result": [
        {
            "src": "apple",
            "dst": "苹果"
        }
    ]
}
```

### **异常情况**：

```
{
    "error_code": "54001",
    "error_msg": "Invalid Sign"
}
```

## 2 图片翻译接口

### 接入方式

图片翻译API HTTPS地址：

```
https://fanyi-api.baidu.com/api/trans/sdk/picture
```

#### 请求url示例

```
https://fanyi-api.baidu.com/api/trans/sdk/picture?
from=zh&to=en&appid=20180905000111111&salt=1435660288&sign=bf7303b9be4191726f62c19115c9a165&cuid=APICUID&mac=mac&version=3
```

#### 请求方式：

POST/GET

#### 输入参数

| 字段名  |  类型   | 是否必填 | 描述                                                         |
| :-----: | :-----: | :------: | ------------------------------------------------------------ |
|  image  |  files  |    是    | 请求翻译的图片数据                                           |
|  from   | string  |    是    | 目前源语种方向                                               |
|   to    | string  |    是    | 译文语种方向                                                 |
|  appid  | string  |    是    | APPID，可在[管理控制台](http://nlp-mt.baidu.com/api/trans/product/desktop?req=developer)查看 |
|  salt   | string  |    是    | 随机数                                                       |
|  cuid   | string  |    是    | 固定值：APICUID                                              |
|   mac   | string  |    是    | 固定值：mac                                                  |
| version | integer |    是    | 固定值：3                                                    |
|  paste  | integer |    否    | 图片贴合类型：0 - 关闭文字贴合 、1 - 返回整图贴合 、2 - 返回块区贴合 |
|  sign   | string  |    是    | 签名，32位小写                                               |

**注：**

1. 支持jpg、jpeg、png图片格式，注意均为小写。图片大小不超过4M，最短边至少30px，最长边最大4096px，长宽比3：1以内。
2. 签名规则：md5(appid+md5(image)+salt+cuid+mac+密钥)。
3. md5(image) 中的image是原始图片数据，不加任何编码，32位小写。
4. image图片上传Content-Type=multipart/form-data。

### 输出参数

| 字段名     | 描述                | 备注                                                  |
| ---------- | ------------------- | ----------------------------------------------------- |
| error_code | 错误码              | 详见错误码列表                                        |
| error_msg  | 错误信息            | 以错误码54001为例，其返回的错误信息是Invalid Sign     |
| data       | 返回数据集合        | data是一个对象                                        |
| from       | 源语种方向          | 参考支持语种列表                                      |
| to         | 目标语种方向        | 参考支持语种列表                                      |
| content    | 分段内容            | Content内部是一个数组形式，每个数据格式见下方详细说明 |
| sumSrc     | 未分段翻译原文      | 接入举例中的“这是一个测试 这是一个例子”               |
| sumDst     | 未分段翻译译文      | 接入举例中的“This is a test. This is an example.”     |
| pasteImg   | 图片贴合 (整屏贴合) | paste=1有效，base64格式                               |

注：Content内部是一个数组形式，详情如下：

| 字段名    | 类型   | 描述                                   | 备注                                                         |
| --------- | ------ | -------------------------------------- | ------------------------------------------------------------ |
| src       | STRING | 分段翻译的原文                         |                                                              |
| dst       | STRING | 分段翻译的译文                         |                                                              |
| rect      | STRING | 表示识别出的文字的位置                 | 坐标为左上角，依次是left、top、width、height                 |
| lineCount | INT    | 表示该分段信息是原文的多少行合并在一起 |                                                              |
| points    | ARRAY  | 译文矩形坐标                           | 坐标为左上角，坐标顺序左上，右上，右下，左下 格式： [ {"x": 254,"y": 280}, {"x": 506,"y": 278}, {"x": 506,"y": 303}, {"x": 254,"y": 305} ] |
| pasteImg  | STRING | 图片贴合 (分块贴合)                    | 分段贴合图片，paste=2有效，base64格式                        |

## 3 语音翻译接口

### **接入方式：**

**语音翻译API HTTPS地址**：https://fanyi-api.baidu.com/api/trans/v2/voicetrans
**请求方式：** POST

#### **请求参数**

#### **Headers** 

| 参数名称     |                     示例                     | 是否必填 | 备注                                                         |
| ------------ | :------------------------------------------: | -------- | ------------------------------------------------------------ |
| Content-Type |               application/json               | 是       |                                                              |
| X-Appid      |                    appid                     | 是       | APPID 从[管理控制台](https://fanyi-api.baidu.com/api/trans/product/desktop?req=developer)中获得 |
| X-Timestamp  |                  1642331332                  | 是       | Unix时间戳（10位）                                           |
| X-Sign       | i1b/6Ml/NxhEhOnsiQIK7nqsPH/avhhlHgfpo84lJC8= | 是       | 请求签名。请参考 请求签名计算方法 小节                       |

#### **Body**

| 参数名 | 参数类型 | 是否必填 | 示例                         | 备注                                                         |
| :----- | :------- | :------- | :--------------------------- | :----------------------------------------------------------- |
| from   | string   | 是       | en                           | 源语言的语言代码，具体参考语种列表                           |
| to     | string   | 是       | zh                           | 目标语言的语言代码，具体考语种列表                           |
| voice  | string   | 是       | W3NvdXJjZSBhdWRpbyBieXRlc10K | 语音文件二进制数据，base64编码                               |
| format | string   | 是       | pcm                          | 音频文件格式。请参考语言列表和音频格式。需上传完整的音频数据，包含的音频时长不超过 60 秒，并且数据大小不超过4MB（base64编码前） |

**示例**

```
{
"from": "en",
"to": "zh",
"format":"pcm",
"voice": "W3NvdXJjZSBhdWRpbyBieXRlc10K"
}
```

### **响应参数**

#### **Header**

| 参数名称   | 参数类型 | 示例                             | 备注          |
| ---------- | -------- | -------------------------------- | ------------- |
| X-MT-Logid | string   | 970e51a03f5c42ba8868bdad786c13d8 | 返回唯一logid |

#### **Body**

| 参数名称        | 参数类型 | 示例                   | 备注                              |
| --------------- | -------- | ---------------------- | --------------------------------- |
| code            | int      | 0                      | 错误码 0：成功 非0：失败          |
| msg             | string   | Success                | 错误信息                          |
| data            | object   |                        | 结果结构，当且仅当code为 0 时存在 |
| data.source     | string   | 今天天气不错。         | 语音识别的原文                    |
| data.target     | string   | It's a nice day today. | 翻译后的译文                      |
| data.target_tts | string   | W2F1ZGlvIGJ5dGVzXQo=   | 译文 TTS，base64数据              |

#### **正常情**况

```
{
"code": 0,
"msg": "Success",
"data": {
"source": "今天天气不错。",  // 识别原文
"target": "It's a nice day today.",  // 译文
"target_tts": "W2F1ZGlvIGJ5dGVzXQo="  // 译文TTS ，base64编码
}
}
```

####  **异常情况**

```
{
"code": 10000,
"msg": "Internal server error"
}
```

### **请求签名** **`X-Sign`** **计算方法**

1. 将音频文件进行base64编码，得到音频编码 ，即用于请求参数中的 `voice` 字段
2. 拼接字符串： `X-Appid` +  `X-Timestamp` + `voice`  
3. 使用 `hmac_sha256` 加密算法对（2）中的字符串进行加密，并得到base64格式的签名（因为hmac一般得到的是二进制字节流），做为 `X-Sign` 。`hmac_sha256` 的密钥来自于使用翻译开放平台分配的密钥，（可在 [管理控制台](http://api.fanyi.baidu.com/api/trans/product/desktop?req=developer) - 开发者信息获得）

#### **示例**

```
appid = '2015063000000001'  # 请替换为您的APP ID
timestamp = '1646034877'  # 10位Unix时间戳
voice_bytes = b'00010101011101010101'
secret_key = 'XWG7Gyj'  # 翻译开放平台分配的密钥
# step1: base64编码音频文件
voice = base64encode(voice_bytes)
# step2: 得到待加密的字符串
msg = appid + timestamp + voice
# step3: 加密得到签名，作为`X-Sign`。若hmac得到的是二进制字节，需要进行base64编码
sign = base64encode(hmac_sha256(secret=secret_key, message=msg))
```

## 4 语音合成接口

### 请求方式及参数基本说明

语音合成接口支持 POST 和 GET两种方式， 推荐POST方式请求。 正式地址：http://tsn.baidu.com/text2audio 或 https://tsn.baidu.com/text2audio

- POST 方式（推荐）， 建议文本不超过120 GBK字节，即60个汉字或者字母数字。最长1024GBK字节，文字越长耗时越长。
- GET 方式，拼接后的url总长度不多于1000个字符。
- 文本不超过120 GBK字节，即约60个汉字或者字母数字记为1次请求。每超过120个GBK字节则多记1次计费调用。

如需合成更长文本，推荐使用[长文本在线合成](https://ai.baidu.com/tech/speech/long_tts)。长文本在线合成可将10万字以内文本一次性合成，异步返回音频。支持多种优质音库，将超长文本快速转换 成稳定流畅、饱满真实的音频。适用于阅读听书、新闻播报等客户。

#### 请求方式和参数

#### 上传参数

| 参数 | 可需 | 描述                                                         |
| ---- | ---- | ------------------------------------------------------------ |
| tex  | 必填 | 合成的文本，文本长度必须小于1024GBK字节。建议每次请求文本不超过120字节，约为60个汉字或者字母数字。 请注意计费统计依据：120个GBK字节以内（含120个）记为1次计费调用；每超过120个GBK字节则多记1次计费调用。 如需合成更长文本，推荐使用[长文本在线合成](https://ai.baidu.com/tech/speech/long_tts) |
| tok  | 必填 | 开放平台获取到的开发者[[access_token\]](https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjhhu)获取 Access Token "access_token" |
| cuid | 必填 | 用户唯一标识，用来计算UV值。建议填写能区分用户的机器 MAC 地址或 IMEI 码，长度为60字符以内 |
| ctp  | 必填 | 客户端类型选择，web端填写固定值1                             |
| lan  | 必填 | 固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh      |

#### tex字段2次urlencode

由于urlencode有两个标准 RFC 1738和RFC 3986. 百度为了更好地兼容，支持1次及2次urlencode， 其中2次urlencode可以覆盖全部的特殊字符。因而推荐传递tex 参数时做2次urlencode编码。

测试用例：“1+1=2”。 一次urlencode时，“+”可能会没有合成。

#### POST调用方式（推荐）

将文本以及其他参数写入到body里面，利用html表单的方式将参数传递到服务端。 所有的参数都在body中。body里面的数据为：

```text
tex=***&lan=zh&cuid=***&ctp=1&aue=3&tok=***
tex 原始参数是"百度你好“
第一次urlencode后 tex=%e7%99%be%e5%ba%a6%e4%bd%a0%e5%a5%bd
第二次urlencode后 tex=%25e7%2599%25be%25e5%25ba%25a6%25e4%25bd%25a0%25e5%25a5%25bd
```

#### GET调用方式

将所有的参数都填写到URL地址中，可以通过浏览器可以播放合成的语音结果。

```text
https://tsn.baidu.com/text2audio?tex=***&lan=zh&cuid=***&ctp=1&tok=***
    
// 注意tex参数需要按照url参数标准使用url_encode UTF8编码，如合成文字为“百度你好”，url为 http://tsn.baidu.com/text2audio?tex=%e7%99%be%e5%ba%a6%e4%bd%a0%e5%a5%bd&lan=zh&cuid=***&ctp=1&tok=***
```

### 返回

**需要根据 Content-Type的头部来确定是否服务端合成成功。**

如果合成成功，返回的Content-Type以“audio”开头

- aue =3 ，返回为二进制mp3文件，具体header信息 **Content-Type: audio/mp3**；
- aue =4 ，返回为二进制pcm文件，具体header信息 **Content-Type:audio/basic;codec=pcm;rate=16000;channel=1**
- aue =5 ，返回为二进制pcm文件，具体header信息 **Content-Type:audio/basic;codec=pcm;rate=8000;channel=1**
- aue =6 ，返回为二进制wav文件，具体header信息 **Content-Type: audio/wav**；

如果合成出现错误，则会返回json文本，具体header信息为：**Content-Type: application/json**。其中sn字段主要用于DEBUG追查问题，如果出现问题，可以提供sn帮助确认问题。

错误示例：

```json
{"err_no":500,"err_msg":"notsupport.","sn":"abcdefgh","idx":1}
```