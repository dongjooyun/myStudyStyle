let cur_qNum = 1;

let questions = {
    1: {
        "title": "시험 일주일 전, 카페에서 공부에 열중하던 나. 친구가 오더니 잠깐 머리 좀 식히자고 하는데?",
        "type": "JP",
        "A": "'분명 또 한참 놀텐데..' \"나 이거만 끝내고 갈게.\"",
        "B": "'!!! 지금이니!?' 기회를 놓치지 않고 친구와 함께 논다."
    },
    2: {
        "title": "미리 공부를 해놓지 못한 과목이 내일 시험이다. 이제부터 어떻게 공부하지?",
        "type": "SN",
        "A": "한 파트만 정해서 깊게 공부한다.",
        "B": "전체적으로 여러번 얕게 훑어본다."
    },
    3: {
        "title": "시험을 보기 위해 자리를 잡고 앉은 나. 아니 근데 책상이 흔들리네??",
        "type": "JP",
        "A": "'이럴 줄 알고 준비했지!' 이면지를 끼워넣어 책상의 수평을 맞춘다.",
        "B": "임시방편으로 책상이 흔들리는 쪽을 다리로 누르고 문제를 풀지만 시험 내내 신경 쓰인다."
    },
    4: {
        "title": "\"그대만큼 사랑스러운 사람을 본 일이 없다.\" 필적확인문구를 보고 든 생각",
        "type": "TF",
        "A": "별 생각 없이 바로 필적확인란에 적는다.",
        "B": "'문구 잘 골랐다,, 어디서 본 글 같은데..' 쓰면서 별 생각을 다한다."
    },
    5: {
        "title": "시험을 보던 중, 갑자기 화재 비상벨이 울린다.",
        "type": "SN",
        "A": "잠시 당황하지만 무시하고 풀던 문제에 집중한다.",
        "B": "문제를 계속 풀지만 내심 불안해지면서 진짜 불이면 어떡하나 걱정된다."
    },
    6: {
        "title": "설상가상으로 손목시계도 두고왔는데 시험장 시계는 내 자리와 먼 곳에 걸려있다.",
        "type": "EI",
        "A": "곧바로 감독관에게 손을 들어 시계를 앞으로 옮겨달라고 요청한다.",
        "B": "'누가 먼저 말하겠지..' 가만히 있는다."
    },
    7: {
        "title": "정신 없이 마지막 문제를 풀고 있는데 시험 종료 시간이 코앞이다! 이때의 나는?",
        "type": "SN",
        "A": "'제출 시간 어기면 부정행위지.' 마킹은 못 했지만 제때 낸다.",
        "B": "'몇초만 더..!' 빠르게 답을 적은 뒤 제출한다."
    },
    8: {
        "title": "쉬는 시간, 친구들이 정답을 공유하고 있다.",
        "type": "TF",
        "A": "'이미 지난 시험인데 다음 공부나 빨리 더 하지..'",
        "B": "\"어 나도 4번으로 찍었는데!!\" 함께 답을 공유하며 수다를 떤다."
    },
    9: {
        "title": "시험이 끝나고 지칠대로 지친 나. 갑자기 친구가 코노를 가자고 하는데?",
        "type": "EI",
        "A": "\"콜! 이차는 OO포차 가자!! 너도 갈래??\" 갑자기 없던 에너지가 생겨난다.",
        "B": "'집 가서 쉬고 싶었는데...'하는 순간 코노에 끌려와 있다."
    },
    10: {
        "title": "코노와 피방비로 18,200원을 썼다. 정산할 때 내가 보낼 톡은?",
        "type": "JP",
        "A": "\"9,100원 송금 부탁~\"",
        "B": "\"걍 구천원만 보내줘~\""
    },
    11: {
        "title": "집에 와서 채점을 해보았는데 생각보다 성적이 잘 나왔다!!",
        "type": "EI",
        "A": "바로 스토리에 인증! 세상 사람들 저 시험 잘 봤어요~~",
        "B": "'나 생각보다 잘 봤어!!' 가족과 몇몇 친구들에게만 말해준다."
    },
    12: {
        "title": "내 소식을 접한 베프는 시험을 망쳐서 속상해하고 있다. 친구에게 가장 먼저 건넬 말은?",
        "type": "TF",
        "A": "\"헉 무슨 문제 틀렸는데?\"",
        "B": "\"미안해 공부하느라 힘들었지? 수고 많았어.\""
    }
}

let result = {
    "ESTJ": {
        "animal": "기린",
        "explain": "기린 설명",
        "img": "giraffe.jpg"
    },
    "ESTP": {
        "animal": "악어",
        "explain": "악어 설명",
        "img": "crocodile.png"
    },
    "ESFJ": {
        "animal": "고릴라",
        "explain": "고릴라 설명",
        "img": "gorilla.jpg"
    },
    "ESFP": {
        "animal": "미어캣",
        "explain": "미어캣 설명",
        "img": "meerkat.jpg"
    },
    "ENTJ": {
        "animal": "호랑이",
        "explain": "호랑이 설명",
        "img": "tiger.jpg"
    },
    "ENFJ": {
        "animal": "카피바라",
        "explain": "카피바라 설명",
        "img": "capybara.jpg"
    },
    "ENTP": {
        "animal": "태양새",
        "explain": "태양새 설명",
        "img": "sunbird.jpg"
    },
    "ENFP": {
        "animal": "멋쟁이 사자",
        "explain": "멋쟁이 사자 설명",
        "img": "lion.jpg"
    },
    "ISTJ": {
        "animal": "하마",
        "explain": "하마 설명",
        "img": "hippo.jpg"
    },
    "ISTP": {
        "animal": "나무늘보",
        "explain": "나무늘보 설명",
        "img": "sloth.jpg"
    },
    "ISFJ": {
        "animal": "부엉이",
        "explain": "부엉이 설명",
        "img": "owl.jpg"
    },
    "ISFP": {
        "animal": "거북이",
        "explain": "거북이 설명",
        "img": "turtle.jpg"
    },
    "INTJ": {
        "animal": "치타",
        "explain": "치타 설명",
        "img": "cheetah.jpg"
    },
    "INTP": {
        "animal": "침팬지",
        "explain": "침팬지 설명",
        "img": "chimpanzee.jpg"
    },
    "INFJ": {
        "animal": "물소",
        "explain": "물소 설명",
        "img": "buffalo.jpg"
    },
    "INFP": {
        "animal": "코끼리",
        "explain": "코끼리 설명",
        "img": "elephant.jpg"
    }
}

function start() {
    $(".start").hide();
    $(".question").show();
    next();
}

$("#A").click(function () {
    let type = $("#type").val();
    let preVal = $("#" + type).val();
    $("#" + type).val(parseInt(preVal) + 1);
    next();
});

$("#B").click(function () {
    next();
});

function next() {
    if (cur_qNum == 13) {
        $(".question").hide();
        $(".result").show();

        let mbti = "";
        ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";

        $("#img").attr("src", result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
    }
    else {
        $(".progress-bar").attr('style', 'width: calc(100/12*' + cur_qNum + '%)');
        $("#title").html(questions[cur_qNum]["title"]);
        $("#type").val(questions[cur_qNum]["type"]);
        $("#A").html(questions[cur_qNum]["A"]);
        $("#B").html(questions[cur_qNum]["B"]);
        cur_qNum++;
    }
}

$(".restart-btn").click(function () {
    $('html').scrollTop(0); //맨 위로 스크롤
    location.reload();      //새로고침
});