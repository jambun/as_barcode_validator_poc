$(function() {

        $('#top_container_barcode_').on('keyup', function () {
                var bc = $(this).val();

                // Luhn algorithm
		// https://en.wikipedia.org/wiki/Luhn_algorithm
                var sum = parseInt(bc.slice(-1));
                var nDigits = bc.length;
                var parity = nDigits % 2;
                for (var i = 0; i < nDigits - 1; i++) {
                    var digit = parseInt(bc[i]);
                    if (i % 2 == parity) {
			digit = digit * 2;
                    }
                    if (digit > 9) {
			digit = digit - 9;
                    }
                    sum += digit;
                }
                var valid = (sum % 10) == 0;

                if (valid) {
                    $(this).closest('.form-group').removeClass('has-error');
		} else {
                    $(this).closest('.form-group').addClass('has-error');
                }

            });

    });
