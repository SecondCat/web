
// 高亮
function highLight(obj, color = "rgba(255,255,255,0.9)") {
    obj.style.cssText = "box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.7)";
    obj.style.background = color;
}
// 低亮
function lowLight(obj, color = "rgba(255,255,255,0.5)") {
    obj.style.cssText = "box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4)";
    obj.style.background = color;
}

// 放大
function bigImg(obj, height = "83px", width = "auto") {
    obj.style.cssText = "box-shadow: 4px 4px 12px rgba(0,0,0,0.6)";
    obj.style.height = height;
    obj.style.width = width;
}
// 恢复
function normalImg(obj, height = "80px", width = "auto") {
    obj.style.cssText = "box-shadow: 0px 0px 0px rgba(0,0,0,0.0)";
    obj.style.height = height;
    obj.style.width = width;
}

// 响应动画
function respondImg(obj, width = "auto", height = "auto", color = "auto") {
    obj.style.width = width;
    obj.style.height = height;
    if (color != "auto") {
        obj.style.background = color;
    }
}

function respondImgDef(obj, default_mode) {
    switch (default_mode) {
        case "ZOOMIN":
            height = "105px";
            break;
        case "ZOOMOUT":
            height = "100px";
            break;
        case "ZOOMIN_L":
            height = "105px";
            color = "rgb(255,255,255)";
            break;
        case "ZOOMOUT_L":
            height = "100px";
            color = "rgb(200,200,200)";
            break;
    }
    respondImg(obj, "auto", height, color);
}


