Format Dates
moment().format('MMMM Do YYYY, h:mm:ss a'); // October 6th 2020, 4:19:22 pm
moment().format('dddd');                    // Tuesday
moment().format("MMM Do YY");               // Oct 6th 20
moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
moment().format();    

Relative Time
moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 8 years ago
moment().startOf('day').fromNow();        // 16 hours ago
moment().endOf('day').fromNow();          // in 8 hours
moment().startOf('hour').fromNow();      

Calendar Time
moment().subtract(10, 'days').calendar(); // 09/26/2020
moment().subtract(6, 'days').calendar();  // Last Wednesday at 4:19 PM
moment().subtract(3, 'days').calendar();  // Last Saturday at 4:19 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 4:19 PM
moment().calendar();                      // Today at 4:19 PM
moment().add(1, 'days').calendar();       // Tomorrow at 4:19 PM
moment().add(3, 'days').calendar();       // Friday at 4:19 PM
moment().add(10, 'days').calendar();      // 10/16/2020

Multiple Locale Support
moment.locale();         // en
moment().format('LT');   // 4:19 PM
moment().format('LTS');  // 4:19:59 PM
moment().format('L');    // 10/06/2020
moment().format('l');    // 10/6/2020
moment().format('LL');   // October 6, 2020
moment().format('ll');   // Oct 6, 2020
moment().format('LLL');  // October 6, 2020 4:19 PM
moment().format('lll');  // Oct 6, 2020 4:19 PM
moment().format('LLLL'); // Tuesday, October 6, 2020 4:19 PM
moment().format('llll'); // Tue, Oct 6, 2020 4:19 PM

