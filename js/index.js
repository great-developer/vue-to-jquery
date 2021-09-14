$(document).ready(function(){
	startConfetti();
	$('.opening-modal').fadeIn();
	$('.verifiy').hide();
	var items = 0;
	$('.open-btn').click(function () {
		$('.opening-modal').fadeOut();
		stopConfetti();
	});

	$('.answer-1').click(function() {
		$('#answer-1').addClass('hide-answer');
		$('#answer-2').fadeIn(2000);
		$('.survey-question').text('คุณอายุเท่าไร?');
		$('.step-1').removeClass('is-active');
		$('.step-2').addClass('is-active');
	});

	$('.answer-2').click(function() {
		$('#answer-2').hide();
		$('#answer-3').fadeIn(2000);
		$('.survey-question').text('บ้านของคุณมีกี่คน?');
		$('.step-1').removeClass('is-active');
		$('.step-2').removeClass('is-active');
		$('.step-3').addClass('is-active');
	});

	$('.answer-3').click(function () {
		$('.survey').hide();
		$('.verifiy').show();
		setTimeout(function () {
			$('.checked-1').removeClass('hide').addClass('show');
			$('.unchecked-1').removeClass('show').addClass('hide');
		}, 2000);

		setTimeout(function () {
			$('.checked-2').removeClass('hide').addClass('show');
			$('.unchecked-2').removeClass('show').addClass('hide');
		}, 3500);

		setTimeout(function () {
			$('.checked-3').removeClass('hide').addClass('show');
			$('.unchecked-3').removeClass('show').addClass('hide');
		}, 4500);

		setTimeout(function () {
			$('.box-picker').show();
			$('.verifiy').hide();
			$('.instrunctions-modal').fadeIn();
		}, 6500);

	});

	$('.box-picker-item').each(function(i){
		$(this).attr('id', 'box-picker-item-' + i);
		$(this).click(function () {
			items++;
			$('#box-picker-item-' + i + ' .lid').css('-webkit-transform', 'translateY(-70%) rotate(-25deg) translateX(-25%)').css('transform', 'translateY(-70%) rotate(-25deg) translateX(-25%)');
			if(items == 1) {
				setTimeout(function () {
					$('.showFailModal').fadeIn()
				}, 1000);
			} else if(items > 1) {
				$('#box-picker-item-' + i + ' .prize').show();
				$('#box-picker-item-' + i + ' .prize').css('-webkit-transform', 'translateY(-20%)').css('transform', 'translateY(-20%)');
				setTimeout(function () {
					$('.showSuccessModal').fadeIn();
					startConfetti();
				}, 500);
				$('.showFailModal').fadeOut();
			}
		});
	})

	
});

function closeModal() {
	$('.instrunctions-modal').fadeOut();
}
function closeFailModal() {
	$('.showFailModal').hide();
}

