$("document").ready(function () {
    var previousSelectedGareDepart;
    var previousSelectedGareArrivee;
    var displayedDivRightBloc = '#rightBlocDefault';
    var selectedGareDepart;
    var selectedGareArrivee;
    $('#inputPassagers').click(function changeColorBordersPassagers() {

        $('#passagers').css('border', 'solid 1px #01c3a7');
        $('#passagersPlus').css('border', 'solid 1px #01c3a7');

    });

    $('.inputTrajet').click(function resetBorderInputPassager() {
        $('#passagers').css('border', 'solid 1px #ccc');
        $('#passagersPlus').css('border', 'solid 1px #ccc');
    });

    $('#inputGareDepart').focus(function dispGareDepart() {
        if ($('#rightBlocGareDepart').is(':not(:visible)')) {
            $(displayedDivRightBloc).fadeOut(100);
            setTimeout(function () {
                $('#rightBlocGareDepart').fadeIn();
                $('#rightBlocGareDepart').css('display', 'flex');

                displayedDivRightBloc = '#rightBlocGareDepart';
            }, 150);
        }
    });
    var selectedGareDepart;
    $('.inputGareDepart').click(function insertGareDepartValue() {
        var content = $(this).find('a').html();
        selectedGareDepart = $(this).attr('id');
        
        $('#inputGareDepart').css('opacity', '1');
        $('#inputGareDepart').css('background-color', '#fff');
        $('#inputGareDepart:text').val(content);

        $('#inputGareArrivee').focus();
        $(this).css('background-color', '#fdfdfd');
        $(this).find('a').css('opacity', '1');

        $('#' + previousSelectedGareDepart + '').css('background-color', '#fff');
        $('#' + previousSelectedGareDepart + '').find('a').css('opacity', '0.5');

        previousSelectedGareDepart = $(this).attr('id');
        
    });

    $('.inputGareArrivee').click(function insertGareDepartValue() {
        var content = $(this).find('a').html();
        selectedGareArrivee = $(this).attr('id');
        $('#inputGareArrivee').css('opacity', '1');
        $('#inputGareArrivee').css('background-color', '#fff');
        $('#inputGareArrivee:text').val(content);
        $('#inputAller').focus();
        $(this).css('background-color', '#fdfdfd');
        $(this).find('a').css('opacity', '1');

        $('#' + previousSelectedGareArrivee + '').css('background-color', '#fff');
        $('#' + previousSelectedGareArrivee + '').find('a').css('opacity', '0.5');

        previousSelectedGareArrivee = $(this).attr('id');
    });

    $('#inputGareArrivee').focus(function dispGareArrivee() {
        if ($('#rightBlocGareArrivee').is(':not(:visible)')) {
            $(displayedDivRightBloc).fadeOut(100);
            setTimeout(function () {
                $('#rightBlocGareArrivee').fadeIn();
                $('#rightBlocGareArrivee').css('display', 'flex');

                displayedDivRightBloc = '#rightBlocGareArrivee';
            }, 150);
        }
    });

    $('#inputAller').focus(function dispGareAller() {
        if ($('#rightBlocAller').is(':not(:visible)')) {
            $(displayedDivRightBloc).fadeOut(100);
            setTimeout(function () {
                $('#rightBlocAller').fadeIn();
                $('#rightBlocAller').css('display', 'flex');

                displayedDivRightBloc = '#rightBlocAller';
            }, 150);
        }
    });

    var themonth = 1;
    renderCal(themonth);

    $('.leftPointer').click(function () {
        themonth += -1;
        renderCal(themonth);
    });

    $('.rightPointer').click(function () {
        themonth += 1;
        renderCal(themonth);
    });

    function renderCal(themonth) {
        $('.group li').remove();
        $('.group').append('<li>Lun.</li><li>Mar.</li><li>Mer.</li><li>Jeu.</li><li>Ven.</li><li>Sam.</li> <li>Dim.</li>');
        var d = new Date(),
            currentMonth = d.getMonth() + themonth,
            days = numDays(currentMonth, d.getYear()),
            fDay = firstDay(currentMonth, d.getYear()) - 1,
            months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juilet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

        $('.monthName').text(months[currentMonth - 1]);

        for (var i = 0; i < fDay - 1; i++) {
            $('<li class="empty">&nbsp;</li>').appendTo('.group');
        }

        for (var i = 1; i <= days; i++) {
            $('<li class="liDays">' + i + '</li>').appendTo('.group');
        }

        function firstDay(month, year) {
            return new Date(year, month, 1).getDay();
        }

        function numDays(month, year) {
            return new Date(year, month, 0).getDate();
        }

        $('.group li').click(function () {
            $('.group li').removeClass('active');
            $(this).addClass('active');
        });

        $('.liDays').click(function insertDateAller() {
            var currentDay = $(this).html();
            console.log(currentMonth);
            var currentYear = '2018';
            console.log(currentDay);
            console.log(currentYear);

            $('#inputAller:text').val('Le ' + currentDay + ' ' + months[currentMonth - 1] + ' ' + currentYear);
            $('#inputAller').css('background-color', '#fff');
            $('#inputAller').css('opacity', '1');
            $('.liHours:nth-of-type(5)').attr('id', 'activeHour');
            addHourAller();
            
            /*$('#inputGareArrivee').css('opacity', '1');
            $('#inputGareArrivee').css('background-color', '#fff');
            $('#inputGareArrivee:text').val(content);

            $('#inputAller').focus();
            $(this).css('background-color', '#fdfdfd');
            $(this).find('a').css('opacity', '1');

            $('#' + previousSelectedGareDepart + '').css('background-color', '#fff');
            $('#' + previousSelectedGareDepart + '').find('a').css('opacity', '0.5');

            previousSelectedGareDepart = $(this).attr('id');*/
        });
        
        $('.liHours').click(function insertHoursAller() {
                $('.lihours#activeHour').removeAttr('id', 'activeHour');
                $(this).attr('id', 'activeHour');
            addHourAller();
            });
            
        function addHourAller(){
            var currentHour = $('#activeHour').html();
            $('#hourAller').html('à partir de ' + currentHour);
        }
    }



});
