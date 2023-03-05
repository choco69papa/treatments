/*
 * liffのドキュメントについては以下を参照
 * https://developers.line.biz/ja/reference/liff/
*/

window.onload = function (e) {

  /*
   * liff.init(successCallback, errorCallback)
   * LIFFアプリの初期化を行います。
   * dataにはuserIdなどの情報が入っています。
  */
  liff.init(function (data) {
    initializeApp(data);
  });

};

function initializeApp(data){

  /*
   * liff.getProfile()
   * プロフィールを取得して、表示名（displayName)とトプ画を表示させる
   */
  liff.getProfile().then(function (profile) {
    document.getElementById('displaynamefield').textContent = profile.displayName;

    var profilePictureDiv = document.getElementById('profilepicturediv');
    if (profilePictureDiv.firstElementChild) {
      profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
    }
    var img = document.createElement('img');
    console.log(profile.pictureUrl)
    img.src = profile.pictureUrl;
    img.alt = "Profile Picture";
    img.class = "rounded";
    profilePictureDiv.appendChild(img);

  }).catch(function (error) {
    window.alert("Error getting profile: " + error);
  });



}