# Mac

## iTerm

### Oh My Zsh

#### 安装

**curl安装**
```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
**wget安装**
```bash
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

#### 设置主题

终端输入`open ~/.zshrc`，找到`ZSH_THEME`，修改其值（当`ZSH_THEME="random"时，每个窗口将随机样式`）。

#### 查看zsh自带主题

```bash
cd ~/.oh-my-zsh/themes && ls
```