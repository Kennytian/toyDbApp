keytool -genkey -v -keystore toyDbApp.keystore -alias toyDbApp -keyalg RSA -keysize 2048 -validity 10000
输入密钥库口令: toyDbApp123!@#
再次输入新口令: toyDbApp123!@#
您的名字与姓氏是什么?
  [Unknown]:  toyDbApp
您的组织单位名称是什么?
  [Unknown]:  Wantong Tech
您的组织名称是什么?
  [Unknown]:  Wantong Tech
您所在的城市或区域名称是什么?
  [Unknown]:  Wuhan
您所在的省/市/自治区名称是什么?
  [Unknown]:  Hubei
该单位的双字母国家/地区代码是什么?
  [Unknown]:  CN

正在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 10,000 天):
	 CN=toyDbApp, OU=Wantong Tech, O=Wantong Tech, L=Wuhan, ST=Hubei, C=CN
输入 <toyDbApp> 的密钥口令
	(如果和密钥库口令相同, 按回车):
[正在存储toyDbApp.keystore]