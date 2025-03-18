# Introduction and Disclaimer

I use the Steam Deck as a computer via the desktop mode. There is a lot you can do by default in desktop mode. However, I ran into some issues. 

Pacman is the "package manager" SteamOs uses. This is usful for installing tools not found in the "Discover" app. But, when I tried to install some packages I was getting some errors. I am going to show the steps that worked for me.

I am not a Linux admin by trade so I cannot go into much detail why these things work. I hope these tips work for you.

# How Do I Install Packages

This is the bit with all the terminal commands you need to get the job done. If you know nothing about Linux I will include a very brief intro in the next paragraph.

0. Set a "root" password. You should only need to do this once. Enter the command below and follow the steps. This password is incredibly important. **Do not lose it**, this is your admin password for everything on the Steam Deck.
   ```
   passwd
   ```

1. Disable the "readonly" file system.
   ```
   sudo steamos-readonly disable
   ```

2. Initialize the keychain
   ```
   sudo pacman-key --init
   ```

3. Populate the keychain with trusted "archlinux" keys
   ```
   sudo pacman-key --populate archlinux
   ```

4. Populate the keychain with trusted "holo" keys
   ```
   sudo pacman-key --populate holo
   ```

This is everything you should need. Now try to install something. Below is the syntax to install a package. "Vi" is a text editor you can use in the commandline. It comes as standard on a lot of Linux systems. It is vey small so is a good candidate to check everything works.
 
```
sudo pacman -S vi
```

# Undo

You might want to re-enable to readonly file system. 
```
sudo steamos-readonly enable 
```



