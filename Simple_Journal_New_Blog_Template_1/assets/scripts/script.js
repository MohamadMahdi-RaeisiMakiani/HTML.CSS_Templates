// alert("Hello");
let clk_Element = document.querySelector("#clock-show");
let dte_Element = document.querySelector("#date-show");
setInterval(() => {
	let myLocalTime = new Date().toLocaleTimeString();
	let myLocalDate = new Date().toDateString();
	clk_Element.textContent = `${myLocalTime}`;
	dte_Element.textContent = `Today : ${myLocalDate}`;
}, 1000);

// let likedislike_Btns = document.querySelector(".inter1-buttons");
// likedislike_Btns.addEventListener("mouse", x())

// function likebtn_Enter(enterBtn) {
// 	let myColor = window.getComputedStyle(enterBtn)["background-color"];
// 	if (myColor === "rgb(255, 255, 255)") {
// 		enterBtn.style.backgroundColor = "#52c1ec";
// 	}
// }

// function likebtn_Leave(outerBtn) {
// 	let myColor_2 = window.getComputedStyle(outerBtn)["background-color"];
// 	if (myColor_2 === "rgb(82, 193, 236)") {
// 		outerBtn.style.backgroundColor = "#fff";
// 	}
// }

// onmouseenter = "likebtn_Enter(this)";
// onmouseleave = "likebtn_Leave(this)";
// onmouseout="likebtn_Leave(this)"

// let likebtn_Selection_1 = document.querySelectorAll(".inter1-buttons");

// for (eachBtn of likebtn_Selection_1) {
// 	eachBtn.addEventListener("mouseenter", function (element) {
// 		let selectTarget = element.target;
// 		let checkColor =
// 			window.getComputedStyle(selectTarget)["background-color"];
// 		if (checkColor === "rgb(255, 255, 255)") {
// 			selectTarget.style.backgroundColor = "#52c1ec";
// 		}
// 	});
// 	eachBtn.addEventListener("mouseout", function (element) {
// 		let selectTarget = element.target;
// 		let checkColor =
// 			window.getComputedStyle(selectTarget)["background-color"];
// 		if (checkColor === "rgb(82, 193, 236)") {
// 			selectTarget.style.backgroundColor = "#fff";
// 		}
// 	});
// }

function like_buttons(buttonSelector) {
	let parentSelector = buttonSelector.parentElement;
	let parentSelector_2 = buttonSelector.parentElement.parentElement;
	// console.log(parentSelector.className);
	// console.log(parentSelector_2);
	let secondChildSelector = parentSelector_2.childNodes;
	// console.log(secondChildSelector);
	// let spanInside = parentSelector.childNodes[3].childNodes[1];
	let spanInside = parentSelector.childNodes[3];
	if (spanInside.innerText == 0) {
		spanInside.innerText = 1;
		buttonSelector.style.backgroundColor = "#008dc5";
	} else {
		spanInside.innerText = 0;
		buttonSelector.style.backgroundColor = "#fff";
	}
	if (parentSelector.className == "interactions-1") {
		let other_select = secondChildSelector[3].childNodes[1];
		other_select.style.backgroundColor = "#fff";
		other_selectSpan = other_select.parentNode.childNodes[3];
		if (other_selectSpan.innerText == 1) {
			other_selectSpan.innerText = 0;
		}
	} else {
		let other_select = secondChildSelector[1].childNodes[1];
		other_select.style.backgroundColor = "#fff";
		other_selectSpan = other_select.parentNode.childNodes[3];
		if (other_selectSpan.innerText == 1) {
			other_selectSpan.innerText = 0;
		}
	}
}

function perbtn(pressedObject1) {
	let parent_finder_1 =
		pressedObject1.parentElement.parentElement.parentElement.parentElement;
	let parent_finder_2 =
		pressedObject1.parentElement.parentElement.parentElement;

	let parent_finder_3 =
		pressedObject1.parentElement.parentElement.parentElement.childNodes[5];

	if (parent_finder_1.className == "articles-section") {
		parent_finder_2.childNodes[1].innerHTML = `تعریف شخصیت چیست؟`;
		parent_finder_2.childNodes[1].setAttribute("dir", "rtl");
		parent_finder_2.childNodes[5].innerText = `به نظر می رسد وقتی از شخصیت شناسی حرف می زنیم، یا درباره ی شخصیت کسی اظهارنظر می کنیم، تا حد خوبی می دانیم درباره ی چه چیزی صحبت می کنیم. هم چنین اگر کسی به شما بگوید که از نظر شخصیتی با همکارش تفاوت دارد و به همین علت، تعارض های فراوانی را در محیط کار تجربه می کند، احتمالاً فکر می کند منظور خود را به صورت واضح و شفاف بیان کرده است. وجود تقاضای قابل توجه برای کتاب های شخصیت شناسی و نیز انواع کلاس ها و دوره های آموزشی درباره شخصیت،مورد دیگری است که ممکن است باعث شود فکر کنیم شخصیت و شخصیت شناسی برای اغلب انسان ها، اصطلاحاتی شفاف و دارای تعریف مشخص هستند. اما اگر کمی جستجو کنید و بخواهید بفهمید که «شخصیت یعنی چه؟» ، به سرعت به نتیجه می رسید که بر سر تعریف شخصیت در روانشناسی اتفاق نظر وجود ندارد و در مورد شخصیت، هر کس دیدگاه و سلیقه ی خود را مطرح کرده است. بنابراین اصلا نمی توانید به سادگی شخصیت را تعریف کنید. مهم ترین نکته ای که باید در تعریف شخصیت مدنظر قرار دهیم این است که تعریف رفتار و شخصیت، شباهت ها و اشتراکاتی دارند. اما آنچه شخصیت را از رفتار متمایز می کند، پیوستگی، دوام و بقاء الگوهای رفتاری است: یک بار فریاد زدن، یعنی شما عصبانی شده اید (رفتار)؛ اما به صورت مکرر و در شرایط مختلف فریاد زدن بر سر این و آن، می تواند به این معنا باشد که شما عصبی و نوروتیک هستید. چرا بر روی تعریف شخصیت توافق نظر وجود ندارد؟ شخصیت شناسی به شناخت شخصیت انسان می پردازد و زمانی می توان به تعریفی واحد از شخصیت رسید، که تعریف انسان بر ایمان مشخص و شفاف باشد. اما دانشمندان و محققان مختلف، نگاه های متفاوتی نسبت به انسان داشته اند. این تنوع دیدگاه ها، در تعریف شخصیت هم منعکس شده است. شخصیت شناسی به الگوهای نسبتاً ثابت در ویژگی ها، صفات و رفتار هر فرد می پردازد؛ و به ما کمک می کند رفتارهای او را در شرایط و وضعیت های مختلف، درک و پیش بینی کنیم. شخصیت آن چیزی است که یک فرد را نسبت به افراد دیگر متمایز کرده و به فردیت او معنا می دهد. فردیت کلمه ی کلیدی این تعریف است. هیچ دو نفری را نمی توانید بیابید که شخصیت کاملاً یکسان داشته باشند. حتی اگر چند مولفه ی مشخص(به فرض: برونگرایی، صداقت، ثبات هیجانی) در نظر بگیرید و بخواهید همه ی انسان ها را بر اساس همین مولفه ها بسنجید، شیوه ی ترکیب این مولفه ها از فردی تا فرد دیگر تغییر می کند. اگر کمی از دقت علمی فاصله بگیریم، میتوان شخصیت هر فرد را به یک سوپ تشبیه کرد که شاید مواد تشکیل دهنده ی آن، با سوپ شخصیتی فرد دیگر، مشابه باشد، اما سهم و ترکیب مواد، باعث می شود که طعم متفاوتی شکل بگیرد. ریشه کلمه Personality چیست؟ Personality از ریشه ی Persona است. این واژه، در زبان لاتین برای نقابی به کار می رفته که بازیگران تئاتر روی صورت خود می گذاشته اند تا چهره ی خود را با نقشی که در نمایش نامه از آنها انتظار می رفته تطبیق دهند. البته به تعبیر متخصصان ریشه شناسی، این واژه به تدریج در اثر گسترش معنایی، به آن مفهومی رسیده که ما امروزه به کار می بریم. با این توضیحات، می توان گفت اصطلاح شخصیت که ما به کار می بریم، به مفهوم روانشناسی Personality بسیار نزدیک تر است. چون شخصیت از ریشه ی شاخص است و به ویژگی هایی اشاره دارد که هر فرد را در میان سایر افراد، مشخص و متمایز می کند. چرا نام بسیاری از بزرگان روانشناسی را در فهرست کسانی که شخصیت را تعریف کرده اند نمی بینیم؟ هر جا به دنبال تعریف شخصیت بگردید، اغلب تعریف ها، از نویسندگان کتابه ای مرجع و مقالات پراکنده نقل می شود. علت این است که بسیاری از بزرگان شخصیت شناسی، مستقیما به تعریف واژه ی شخصیت نپرداخته اند؛ بلکه صرفاً شخصیت انسان را تحلیل کرده اند. سپس این افراد دانشگاهی بوده اند که با مطالعه ی کار آن ها، کوشیده اند استنباط کنند که واژه ی شخصیت در نوشته ها و نگرش هر یک از این بزرگان، چه مفهومی داشته است.`;
		parent_finder_2.childNodes[5].setAttribute("dir", "rtl");
	}
	if (
		parent_finder_1.className == "news-section" &&
		parent_finder_3.getAttribute("id") == "khabar1"
	) {
		parent_finder_2.childNodes[1].innerHTML = `
WHO و CDC در گزارش جدیدی می گویند سرخک اکنون یک تهدید جهانی قریب الوقوع است
		<small style="float: left;">نوامبر 23 - 2022</small>
`;
		parent_finder_2.childNodes[1].setAttribute("dir", "rtl");
		parent_finder_2.childNodes[5].innerText = `سرخک بسیار مسری است و تقریباً به طور کامل از طریق واکسیناسیون قابل پیشگیری است. اما همه‌گیری کووید منجر به کاهش پوشش واکسن این بیماری شد. سازمان جهانی بهداشت و مرکز کنترل و پیشگیری از بیماری روز چهارشنبه اعلام کردند: اکنون تهدید قریب‌الوقوع شیوع سرخک در مناطق مختلف جهان وجود دارد، زیرا همه‌گیری کووید منجر به کاهش مداوم پوشش واکسیناسیون و ضعف نظارت بر این بیماری شده است. سرخک یکی از مسری ترین ویروس های انسانی است و تقریباً به طور کامل از طریق واکسیناسیون قابل پیشگیری است. با این حال، برای جلوگیری از شیوع بیماری در بین جمعیت ها، نیاز به پوشش 95 درصدی واکسن دارد. سازمان جهانی بهداشت و CDC در گزارشی مشترک اعلام کردند که در سال 2021 به دلیل موانع ایجاد شده توسط همه گیری کووید، نزدیک به 40 میلیون کودک دوز واکسن سرخک را از دست دادند. دکتر پاتریک اوکانر، سرپرست سرخک سازمان جهانی بهداشت، به رویترز گفت، در حالی که موارد سرخک هنوز به طور چشمگیری در مقایسه با سال های گذشته افزایش نیافته است، اکنون زمان اقدام فرا رسیده است. او روز سه شنبه گفت: «ما بر سر دوراهی هستیم. تلاش برای کاهش این 12 تا 24 ماه بسیار چالش برانگیز خواهد بود. اوکانر گفت: ترکیبی از عوامل، مانند اقدامات طولانی مدت فاصله گذاری اجتماعی و ماهیت دوره ای سرخک، ممکن است توضیح دهد که چرا با وجود افزایش شکاف های ایمنی هنوز انفجاری از موارد وجود نداشته است، اما می تواند به سرعت تغییر کند. ماهیت بسیار مسری بیماری او گفت که آژانس بهداشت سازمان ملل متحد از ابتدای سال شاهد افزایش شیوع گسترده بیماری بوده است که از 19 به 30 مورد تا سپتامبر افزایش یافته است، و افزود که او به ویژه نگران بخش هایی از جنوب صحرای آفریقا است. به گزارش WCMH وابسته به NBC News، هفته گذشته، اداره بهداشت عمومی در کلمبوس، اوهایو، شیوع سرخک را با 24 مورد فعال گزارش کرد. همه این موارد در کودکان واکسینه نشده است. یک مورد سرخک اغلب با تب شروع می شود، اما این بیماری معمولاً با بثورات پوستی مشخص می شود که معمولاً پس از چند روز از صورت و گردن پخش می شود. به گفته سازمان بهداشت جهانی، ویروس می‌تواند تا دو ساعت در هوا و روی سطوح باقی بماند و فرد مبتلا می‌تواند تا چهار روز قبل و بعد از ظاهر شدن بثورات، ویروس را منتقل کند. هیچ داروی ضد ویروسی خاصی برای درمان سرخک وجود ندارد. گزارش جدید تخمین می زند که در سال 2021، حدود 128000 نفر در سراسر جهان بر اثر سرخک جان خود را از دست دادند.`;
		parent_finder_2.childNodes[5].setAttribute("dir", "rtl");
	}
	if (
		parent_finder_1.className == "news-section" &&
		parent_finder_3.getAttribute("id") == "khabar2"
	) {
		parent_finder_2.childNodes[1].innerHTML = `
تیراندازی در مدرسه برزیل 3 کشته و 13 مجروح در دو پردیس
		<small style="float: left;">نوامبر 26 - 2022</small>
`;
		console.log(parent_finder_2.childNodes[3].childNodes[3].innerText);
		parent_finder_2.childNodes[1].setAttribute("dir", "rtl");
		parent_finder_2.childNodes[5].innerText = `برازیلیا، برزیل - به گفته مقامات، یک دانش آموز سابق مسلح به تپانچه نیمه خودکار و جلیقه ضد گلوله روز جمعه پس از ورود به دو مدرسه در جنوب شرقی برزیل، سه نفر را به ضرب گلوله کشته و 13 نفر را زخمی کرد. دبیرخانه امنیت عمومی ایالت در بیانیه ای اعلام کرد که تیراندازی در یک مدرسه دولتی با دانش آموزان ابتدایی و راهنمایی و یک مدرسه خصوصی، هر دو در یک خیابان در شهر کوچک آراکروز در ایالت اسپیریتو سانتو رخ داده است. دو معلم و یک دانش آموز کشته شدند. رناتو کاساگرانده، فرماندار اسپریتو سانتو، گفت که تقریباً چهار ساعت بعد، تیرانداز که یک پسر 16 ساله بود که در مدرسه دولتی درس می خواند، توسط پلیس دستگیر شد. مقامات نام مظنون را اعلام نکردند. مارسیو سلانته، دبیر امنیت عمومی اسپریتو سانتو در ویدئویی که توسط دفتر مطبوعاتی دبیرخانه ارائه شده است، گفت که فیلم دوربین های امنیتی مهاجم را نشان می دهد که جلیقه ضد گلوله به تن دارد و از یک تپانچه نیمه خودکار برای حملات استفاده می کند. کاساگراند گفت این اسلحه متعلق به پدر دانشجوی سابق است که یک افسر پلیس نظامی است. سلانته گفت که علاوه بر تلفات، 13 نفر از جمله 9 مربی مجروح شدند و خاطرنشان کرد که در مدرسه دولتی تیرانداز پس از شکستن قفل به سالن معلمان دسترسی پیدا کرد. شش تن از مجروحان، از جمله دو کودک، هنوز بعد از ظهر جمعه در بیمارستان بستری هستند. تیراندازی در مدارس در برزیل غیرمعمول است، اما در سال های اخیر با فراوانی بیشتری اتفاق افتاده است.`;
		parent_finder_2.childNodes[5].setAttribute("dir", "rtl");
		parent_finder_2.childNodes[3].childNodes[3].innerText = `دو معلم و یک دانش آموز به دست یک دانش آموز سابق مسلح به تپانچه نیمه اتوماتیک و جلیقه ضد گلوله کشته شدند.`;
	}
}

function engbtn(pressedObject2) {
	let parent_finder_1 =
		pressedObject2.parentElement.parentElement.parentElement.parentElement;
	let parent_finder_2 =
		pressedObject2.parentElement.parentElement.parentElement;
	let parent_finder_3 =
		pressedObject2.parentElement.parentElement.parentElement.childNodes[5];

	if (parent_finder_1.className == "articles-section") {
		parent_finder_2.childNodes[1].innerHTML = `
What is the definition of personality?
		`;
		parent_finder_2.childNodes[1].setAttribute("dir", "ltr");
		parent_finder_2.childNodes[5].innerText = `It seems that when we speak of the personality recognition, or commenting on somebody's personality, we know very well what we are talking about. Also, if someone tells you that he/she is different in personality with his/her colleague, and therefore experience a lot of conflicts in the work environment, he/she is probably thinking that he/she has made their point very clear. The existence of significant demand for personality books and various classes and training courses on personality is another case that may cause us to think that personality are clearly defined for most people. But if you search a little and want to find out what “personality means” It was quickly concluded that there is no consensus on the definition of personality in the psychology, and about personality, everyone has raised their own opinion So you can't simply define personality. The most important thing to consider in the definition of personality is that the definition of behavior and personality have similarities and commons. But what distinguishes a personality from behavior is continuity, permanence, and survival of behavioral patterns: Once shouted, that is, you are angry (behavior); but repeatedly and under different conditions, it can mean that you are nervous and neurotic. Why is there no consensus on the personality? Personality studies the recognition of human personality, and a single definition of personality can be reached when the human definition of faith is clear and transparent. But scientists and researchers have different looks on the human. This variety of point of views is also reflected in the definition of personality. Personality deals with relatively fixed patterns in the characteristics, traits, and behaviors of each person; And it helps us to understand and predict his behaviors in different situations. Personality is what distinguishes a person from others and gives meaning to his Individuality. Individuality is the keyword of this definition. You can't find two people who have the same personality. Even if you consider a few specific components (e.g., Extraversion, honesty, emotional stability) and want to analyze all human beings on the basis of these elements, the way of combining these elements varies from person to person. If we take a little distance from scientific accuracy, we can compare each person's personality to a soup, the ingredients of which may be similar to another person's personality soup, but the share and composition of the ingredients cause a different taste to be formed. What is the root of the word Personality? The Personality is from the root “Persona”. The word was used in Latin for a mask that theater actors put on their faces to match their face with the role expected of them in the play. Of course, in the interpretation of etymologist experts, the term gradually becomes a concept that we use today. With this description, the term 'personality' we apply is much closer to the concept of Personality in psychology. Since personality is the root of the characteristic, it points to the traits that distinguish each individual among the other people. Why don't we see the names of many of the great psychology elders in the list of those who have defined personality? Everywhere you looking for a definition of personality, most definitions are cited from the authors with the references and scattered papers This is because many of the elders who had talk about personality, they didn't directly address the definition of the word personality; but they have only analyzed the human personality. Then it was the academics who, by studying elders works, tried to figure out what the word personality meant in the writings and attitudes of each of these elders.`;
		parent_finder_2.childNodes[5].setAttribute("dir", "ltr");
	}
	if (
		parent_finder_1.className == "news-section" &&
		parent_finder_3.getAttribute("id") == "khabar1"
	) {
		parent_finder_2.childNodes[1].innerHTML = `
Measles is now an imminent global threat, WHO and CDC say in a new report
	<small style="right: left;">Nov 23 2022</small>
`;
		parent_finder_2.childNodes[1].setAttribute("dir", "ltr");
		parent_finder_2.childNodes[5].innerHTML = ` Measles is highly contagious and almost entirely preventable through vaccination. But the Covid pandemic led to a decline in vaccine coverage for the disease. There is now an imminent threat of measles spreading in various regions globally, as the Covid pandemic has led to a steady decline in vaccination coverage and weakened surveillance of the disease, the World Health Organization and the Centers for Disease Control and Prevention said Wednesday. Measles is one of the most contagious human viruses and is almost entirely preventable through vaccination. However, it requires 95% vaccine coverage to prevent outbreaks among populations. A record high of nearly 40 million children missed a measles vaccine dose in 2021 due to hurdles created by the Covid pandemic, the WHO and the CDC said in a joint report. While measles cases have not yet gone up dramatically compared to previous years, now is the time to act, the WHO's measles lead, Dr. Patrick O'Connor, told Reuters. “We are at a crossroads,” he said Tuesday. “It is going to be a very challenging 12-24 months trying to mitigate this.” A combination of factors, such as lingering social distancing measures and the cyclical nature of measles, may explain why there has not yet been an explosion of cases despite the widening immunity gaps, but that could change quickly, O'Connor said, pointing out the highly contagious nature of the disease. The United Nations health agency has already seen an increase in large disruptive outbreaks since the start of the year, rising from 19 to almost 30 by September, he said, adding that he was particularly worried about parts of sub-Saharan Africa. Last week, the public health department in Columbus, Ohio, reported a measles outbreak with 24 active cases, according to the NBC News affiliate WCMH. All of those cases are in unvaccinated children. A measles case often starts with a fever, but the illness is typically characterized by a rash that typically begins to spread from the face and neck after a few days. The virus can linger in the air and on surfaces for up to two hours, and an infected person can transmit the virus up to four days before and after the rash appears, according to the WHO. There is no specific antiviral to treat measles. The new report estimates that in 2021, around 128,000 people died of measles worldwide.`;
		parent_finder_2.childNodes[5].setAttribute("dir", "ltr");
	}

	if (
		parent_finder_1.className == "news-section" &&
		parent_finder_3.getAttribute("id") == "khabar2"
	) {
		parent_finder_2.childNodes[1].innerHTML = `
Brazil school shooter kills 3, injures 13 at two campuses
	<small style="right: left;">Nov 26 2022</small>
`;
		parent_finder_2.childNodes[1].setAttribute("dir", "ltr");
		parent_finder_2.childNodes[5].innerHTML = `BRASILIA, Brazil — A former student armed with a semiautomatic pistol and wearing a bulletproof vest fatally shot three people and wounded 13 on Friday after barging into two schools in southeastern Brazil, authorities said. The shootings took place at a public school with elementary and middle school students and a private school, both on the same street in the small town of Aracruz in Espirito Santo state, the state’s public security secretariat said in a statement. Two teachers and a student were killed. Approximately four hours later, the shooter, identified as a 16-year-old boy who used to study at the public school, was arrested by police, Espirito Santo Gov. Renato Casagrande said. Authorities did not release the suspect’s name. Security camera footage showed the assailant wearing a bulletproof vest and using a semiautomatic pistol for the attacks, Espirito Santo public security secretary Márcio Celante said in a video provided by the secretariat’s press office. Casagrande said the weapon belongs to the former student’s father, a military police officer. In addition to the fatalities, 13 people were wounded, including nine instructors, said Celante, who noted that in the public school the shooter gained access to the teachers lounge after breaking a lock. Six of the wounded, including two children, were still hospitalized Friday afternoon. School shootings are uncommon in Brazil, but have happened with somewhat greater frequency in recent years.`;
		parent_finder_2.childNodes[5].setAttribute("dir", "ltr");
		parent_finder_2.childNodes[3].childNodes[3].innerText = `Two teachers and a student were killed by a former student armed with a semiautomatic pistol and wearing a bulletproof vest.`;
	}
}

function commentAdder() {
	let sectionSelector_AddedComments =
		document.querySelector(".comments-added");
	let get_userName = document.querySelector("#user-name");
	let get_userMail = document.querySelector("#user-mail");
	let get_Comment = document.querySelector("#cmntar");

	let userName_Text = get_userName.value;
	let userMail_Text = get_userMail.value;
	let userComment_Text = get_Comment.value;

	let commentTemplate = `
<div class="cl-comments">
	<p class="user-identifier">${userName_Text}</p>
	<hr />
	<p>${userName_Text}</p>
	<small class="cmntuser-stnm">Today ${userName_Text} By ${userName_Text}</small>
</div>	
`;

	if (userName_Text != "" && userComment_Text != "") {
		let commentTemplate = `
<div class="cl-comments">
	<p class="user-identifier">${userName_Text} | ${userMail_Text}</p>
	<hr />
	<p>${userComment_Text}</p>
	<small class="cmntuser-stnm">Today ${new Date().toLocaleTimeString()} By ${userName_Text}</small>
</div>	
`;
		let new_divSection = document.createElement("div");
		new_divSection.classList.add("cl-comments");
		new_divSection.innerHTML = commentTemplate;
		sectionSelector_AddedComments.appendChild(new_divSection);
		get_userName.value = "";
		get_userMail.value = "";
		get_Comment.value = "";
	} else {
		alert("Fill in the blanks! At least your name and comment.");
	}
}

// buttonSelector.classList.remove;
// buttonSelector.classList.add("inter1-buttons");
// DisLikes : <span>0</span>
