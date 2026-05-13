//背景音乐
sound.play("背景音乐","loop")

//云朵生成
cloudsAdd(8);
//云朵开始漂移
$(".clouds").trigger("run");
//云朵被点击时开始抖动
$(".clouds").click(XYaction);

//蛋
eggRun();

//界面拖拽功能绑定
drag.autoBinds();
//角度跟随自动绑定
//rotateFollow.autoBinds();