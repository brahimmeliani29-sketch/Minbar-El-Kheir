document.addEventListener("DOMContentLoaded",()=>{
    fetchPrayerTimes();
});
async function fetchPrayerTimes(){
    const container=document.getElementById("times-container");
    const latitude=36.7538;
    const longitude=3.0588;

    try{
const response=await fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=3`);
const data=await response.json();
const timings=data.data.timings;

container.innerHTML=`
<div style="display:flex;justify-content:space-arround;flex-wrap:wrap;gap:10px;margin-top:15px;">
<div class="time-box"><strong>الفجر:</strong>${timings.Fajr}</div>
<div class ="time-box"><strong>الشروق:</strong>${timings.Sunrise}</div>
<div class="time-box"><strong>الظهر:</strong>${timings.Dhuhr}</div>
<div class="time-box"><strong>العصر:</strong>${timings.Asr}</div>
<div class="time-box"><strong>المغرب:</strong>${timings.Maghrib}</div>
<div class="time-box"><strong>العشاء:</strong>${timings.Isha}</div>
</div>
`;
    }
    catch(error){
        container.innerHTML="<p>تعذر تحميل أوقات الصلاة,تأكد من الاتصال بالانترنت.</p>";

    }
}





