SET NAMES UTF8;
DROP DATABASE IF EXISTS project;
CREATE DATABASE project CHARSET=UTF8;
USE project;

/******轮播图******/

CREATE TABLE project_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/******楼层图******/

CREATE TABLE mainpt(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  href VARCHAR(128)
);

/******楼层内容******/

CREATE TABLE floor_cont(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  tips1 VARCHAR(64),
  tips2 VARCHAR(64),
  tips3 VARCHAR(64),
  tips4 VARCHAR(64)
);

INSERT INTO project_index_carousel VALUES
(NULL,'img/banner/1.jpg','轮播图1','http://yuer.pcbaby.com.cn/376/3763484.html'),
(NULL,'img/banner/2.jpg','轮播图2','http://pp.pcbaby.com.cn/photo/30018.html'),
(NULL,'img/banner/3.jpg','轮播图3','http://product.pcbaby.com.cn/zx/fs/dg/1708/3725984.htm'),
(NULL,'img/banner/4.jpg','轮播图4','http://ivy.pcbaby.com.cn/click?adid=456242&amp;id=pckids.shouye.jdt.'),
(NULL,'img/banner/5.jpg','轮播图5','http://ivy.pcbaby.com.cn/click?adid=447438&amp;id=pckids.shouye.jdt.&amp;__uuid=5025');

INSERT INTO mainpt VALUES
(NULL,'img/floor/1.png','http://bbs.pcbaby.com.cn/topic-19258610.html'),
(NULL,'img/floor/2.png','http://product.pcbaby.com.cn/zx/pc/ry/1704/3498544.html'),
(NULL,'img/floor/3.png','http://pcbaby.pcvideo.com.cn/video-3081.html'),
(NULL,'img/floor/4.png','http://ivy.pcbaby.com.cn/click?adid=321770&amp;id=pckids.shouye.qtz.');

INSERT INTO floor_cont VALUES
(NULL,'看小便"晴雨表" 知宝宝健康','孕肚小 胎宝宝未必长不好','范建辉 产前需要去胎毒吗','大小宝适用 辅食添加攻略','注意3点 正确进行挫折教育'),
(NULL,'辅食有剩 这样保存营养不浪费','好的睡姿 养成高颜值的宝宝','妈咪烘焙屋 意式培根披萨','酸甜可口 西红柿木耳软面','朵妈手工课 海底世界贴画'),
(NULL,'五彩斑斓 教你做萌缤纷雪糕','开学季 家长们做好准备吗','什么水果 准妈妈吃更健康','掌握方法 养出"睡宝宝"','朵妈手工课 瓦楞纸立体树');