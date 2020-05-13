# Docker

### docker常用命令

```bash
# 查看帮助
docker --help
# 搜索镜像
docker search [镜像名称]
# 获取镜像
docker pull [镜像名称]:[tag]
# 推送镜像到仓库
docker push [镜像名称]:[tag]
# 登录镜像仓库地址
docker [login/logout] [仓库地址]
# 查看本地镜像
docker images
# 删除本地镜像
docker rmi [镜像名称/镜像ID]
# 删除本地镜像 - 强制
docker rmi -f [镜像名称/镜像ID]
# 查看镜像详情
docker inspect [镜像名称/镜像ID]
```

### `Dockerfile`创建镜像

#### Dockerfile文件

```bash
FROM [基础镜像]
COPY ./dist/  /usr/share/nginx/html/
```

#### 创建镜像

```bash
docker build -t [镜像名称]:[tag]
```

### 启动/停止 镜像

```bash
# 启动镜像
docker run
# 停止镜像
docker stop [镜像ID]
```

#### run命令常用选项

| 选项 | 说明 |
| ---- | ---: |
| 香蕉 |   $1 |

