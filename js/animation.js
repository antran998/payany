$(function() {
	// resp
	if($(window).width()<=600){
		$('.history--wallet tbody tr').children(':first-child').html(function(){
			return '<span class="plus-appear"><i class="fa fa-plus-circle" aria-hidden="true"></i></span> '+$(this).html()
		})
		$('.history--wallet tbody tr').click(function(event) {
			if($(this).next().children().hasClass('table-respon')){
				var temtd = $(this).html();
				temtd = temtd.replace("fa-minus","fa-plus");
				$(this).html(temtd);
				$(this).next().remove();						
			}
			else{
				var rowPlus = `
				<tr>
			        <td colspan="2" class="table-respon">
			          <div><strong>${$('.history--wallet thead tr td:nth-child(2)').html()}: </strong><span> ${$(this).find('td:nth-child(2)').html()}</span></div>
			          <div><strong>${$('.history--wallet thead tr td:nth-child(3)').html()}: </strong><span> ${$(this).find('td:nth-child(3)').html()}</span></div>
			        </td>
			    </tr>`;
			    var temtd = $(this).html();
				temtd = temtd.replace("fa-plus","fa-minus");
				$(this).html(temtd);
			    var draw = $(this).after(rowPlus);	
			}		
		});			
	}

	$(window).resize(function(){
		if($(window).width()<=600){
			if(!$('.plus-appear').length){
				$('.history--wallet tbody tr').children(':first-child').html(function(){
					return '<span class="plus-appear"><i class="fa fa-plus-circle" aria-hidden="true"></i></span> '+$(this).html()
				})
			}			
			$('.history--wallet tbody tr').click(function(event) {
				if($(this).next().children().hasClass('table-respon')){
					var temtd = $(this).html();
					temtd = temtd.replace("fa-minus","fa-plus");
					$(this).html(temtd);
					$(this).next().remove();
				}
				else{
					var rowPlus = `
					<tr>
				        <td colspan="2" class="table-respon">
			          		<div><strong>${$('.history--wallet thead tr td:nth-child(2)').html()}: </strong><span> ${$(this).find('td:nth-child(2)').html()}</span></div>
			          		<div><strong>${$('.history--wallet thead tr td:nth-child(3)').html()}: </strong><span> ${$(this).find('td:nth-child(3)').html()}</span></div>
			        	</td>
				    </tr>`;
				    var temtd = $(this).html();
					temtd = temtd.replace("fa-plus","fa-minus");
					$(this).html(temtd);
				    var draw = $(this).after(rowPlus);	
				}			
			});
		}
		else{
			if($('.table-respon').length){
				$('.table-respon').parent().remove();
			}
			if($('.history--wallet tbody tr').find('.plus-appear').length){
				$('.history--wallet tbody tr').find('.plus-appear').remove();
				$('.history--wallet tbody tr').unbind( "click" );
			}
		}
	});

	$('.faq-section h2').click(function(event) {
		if ( $(this).next().is( ":hidden" ) ) {
		    $(this).next().slideDown( "fast" );
	  	} else {
	    	$(this).next().slideUp( "fast" )
	  	}		
	});
	$('.amount-price').click(function(event) {
		$('.input-convert input').val($(this).html());
	});
	$('.send-button').click(function(event) {
		$('.eth-active,.pay-active').css('background','#ffc125');
	});
	$('.eth-active,.pay-active').click(function(event) {
		$(this).css('background','white');
	});

	// add 3
	$('.make-color-button').click(function(event) {
		$('.input-convert input').focus();
	});
});
function callSignForm(){
	var signForm = `<div class="sign-up-container">
        <div class="blur-bg" onclick="offSignForm()"></div>
        <div class="form-sign-up row">
            <table>
                <tr>
                    <td><img src="img-new/PAYANY-logo.png"></td>
                    <td>
                        <input type="text" name="" class="sign-up-input" placeholder="EMAIL">
                        <input type="text" name="" class="sign-up-input" placeholder="USER">
                        <input type="text" name="" class="sign-up-input" placeholder="SPONSOR">
                    	<div class="enter-sign-up"><button>Enter</button></div>
                    </td>
                </tr>
            </table>
        </div>
    </div>`
   
 	$('body').after(signForm);
}

function offSignForm(){
	$('.sign-up-container').remove();
}

$('.waves-effect').click(function(event) {
	callSignForm();	
});



// copy function
var copy = function(elementId) {
	
	var tempinput = document.getElementById(elementId);
	// var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

	var input = document.createElement("input");
	input.value = tempinput.innerHTML;
	tempinput.appendChild(input);

	// if (isiOSDevice) {

	var editable = input.contentEditable;
	var readOnly = input.readOnly;

	input.contentEditable = true;
	input.readOnly = false;

	var range = document.createRange();
	range.selectNodeContents(input);

	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);

	input.setSelectionRange(0, 999999);
	input.contentEditable = editable;
	input.readOnly = readOnly;

	// } else {
	 input.select();
	// }

	document.execCommand('copy');
	tempinput.removeChild(input);
}
