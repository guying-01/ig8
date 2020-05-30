export default {
    /**
     * 图片比例缩放
     * @param imgObject 缩放图片源对象
     * @param maxWidth 允许缩放的最大宽度
     * @param maxHeight 允许缩放的最小宽度
     */
    igbDrawImage(imgObject, maxWidth, maxHeight) {
        let image = new Image();
        //原图片原始地址（用于获取原图片的真实宽高，当<img>标签指定了宽、高时不受影响）
        image.src = imgObject.src;
        // 用于设定图片的宽度和高度
        let tempWidth;
        let tempHeight;

        if (image.width > 0 && image.height > 0) {
            //原图片宽高比例 大于 指定的宽高比例，这就说明了原图片的宽度必然 > 高度
            if (image.width / image.height >= maxWidth / maxHeight) {
                if (image.width > maxWidth) {
                    tempWidth = maxWidth;
                    // 按原图片的比例进行缩放
                    tempHeight = (image.height * maxWidth) / image.width;
                } else {
                    // 按原图片的大小进行缩放
                    tempWidth = image.width;
                    tempHeight = image.height;
                }
            } else { // 原图片的高度必然 > 宽度
                if (image.height > maxHeight) {
                    tempHeight = maxHeight;
                    // 按原图片的比例进行缩放
                    tempWidth = (image.width * maxHeight) / image.height;
                } else {
                    // 按原图片的大小进行缩放
                    tempWidth = image.width;
                    tempHeight = image.height;
                }
            }
            // 设置页面图片的宽和高
            imgObject.height = tempHeight;
            imgObject.width = tempWidth;
            // 提示图片的原来大小
            imgObject.alt = image.width + "×" + image.height;
        }
    }
}