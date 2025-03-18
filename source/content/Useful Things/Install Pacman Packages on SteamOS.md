# Introduction and Disclaimer

I use the Steam Deck as a computer via the desktop mode. There is a lot you can do by default in desktop mode. However, I ran into some issues. 

Pacman is the "package manager" SteamOs uses. This is usful for installing tools not found in the "Discover" app. But, when I tried to install some packages I was getting some errors. I am going to show the steps that worked for me.

I am not a Linux admin by trade so I cannot go into much detail why these things work. I hope these tips work for you.

All of this is done at your own risk. I am not liable for any issues that may occur. 

# How Do I Install Packages

This is the bit with all the terminal commands you need to get the job done. If you know nothing about Linux I will include a very brief intro a couple paragraphs down.

Look for the "Konsole" application. 

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

This process sometimes gets "undone" when Valve pushes new updates to the Steam Deck. If you find you are unable to install packages just follow the steps again. On occasion new steps have been added. I will try keep this page updated where and when I can. 

Requiring the "holo" keys was the most recent update.

# Undo

You might want to re-enable to readonly file system. 
```
sudo steamos-readonly enable 
```

# Super High Level Intro to Linux

If you have never used Linux before you have nothing to worry about. It takes some getting used to, but it is mostly fine, and there are plenty of guides out there. I am going to run through some concepts, and explain what those steps above actually do. 

**Users:** On the Steamdeck there are two users. The "root" user and the "deck" user. Root is the system administrator, this is the case for other Linux systems too. Deck is the account you will be logged in as and interqacting with the deck as. Normal users like Deck do not have all the fancy admin privledges by default. 

**sudo:** The sudo command lets you run a command as another user. By default it lets you run commands as the admin. Add sudo to the front of any command to run it as the admin. You will be asked for your password before the command runs as a security measure. 

**pacman:** Pacman is the package manager for Arch Linux (which SteamOS is based on). It talks to a master server to keep a list of safe packages to install. 

**keyrings and keys:** There are more than just the default keys pacman offers. We can add extrs for other trusted sources. This includes the archlinux and holo keys we saw above. 





