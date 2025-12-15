# Discaimer

This guide is essentially showing you how to move some files around. Nothing we are doing is destructive in nature. However I take no responsibility for any damage, lost files/data etc during this installation. 

I do not own “Dark Souls Item Ransomizer”. Thanks to HotPocketRemix for making the mod. 

# Intro

This is a guide to getting the “Dark Souls Item Randomizer” mod by HotPocketRemix running on the Steam Deck.

https://www.nexusmods.com/darksoulsremastered/mods/86?tab=description

# Why Doesn’t It Just Work?

The Steam Deck is a Linux based computer. This means the “.exe” supplied with the mod will not run by default. In this guide we will use Steam’s “Proton” feature to get the mod to work. 

# Steps

These steps only need to be completed once. 

Here are the steps we will take. I will explain each of them in more detail below. 

1. Download the mod.
2. Move the mod to the DARK SOULS REMASTERED FOLDER
3. Register the mod as a “non Steam game”
4. Run the mod

# Download The Mod

To download the mod you will need to boot into “desktop mode” on the Steam Deck. To do this hold down the power button. Next to the shut down, restart etc options you should see “Switch to Desktop”. You can use the on screen keyboard, and the Steam Deck buttons/analogs to navigate the desktop. However I would recommend connecting a keyboard and mouse if possible as it will feel more natural. 

From here you may need to install a web browser. There is a shopping bag icon on the bottom left of the desktop. From here you can download Chrome, Firefox etc. 

Assuming you have a browser ready to go.You can download the mod here: https://www.nexusmods.com/darksoulsremastered/mods/86?tab=description 

When the mod is downloaded you can find it in the “Dolphin” file explorer. This came installed by default on the Steam Deck. It is the folder icon. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/bd2ffdc7-df93-4fca-8e84-9c0763a4e5f3/Untitled.png)

Navigate to the “Downloads” folder. You should see the mod zipped here. Right click on it (L2 button if you don’t have a mouse connected) and click extract. There is a Readme file that explains a little about how to use the mod, and the exe file. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/38f6c169-4b93-4449-9f9e-044b1b194337/Untitled.png)

# Move The exe File

We need to find where Dark Souls is saved on your Steam Deck. For most people it will be saved in: /home/deck/.local/share/Steam/steamapps/common/DARK SOULS REMASTERED

If for whatever reason it is not at the location above open the Steam app in while in Desktop Mode. This is the same version of Steam you would recognize if you were at a normal PC. Navigate to your Library and find Dark Souls. Right click on it and select “Properties”. Then “Installed Files” and click “Browse”.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/a5c3b856-d5cb-438d-95ba-2d3270233e3e/Untitled.png)

This will open the file explorer at the DARK SOULS REMASTERED folder. Now copy and paste “DarkSoulsItemRandomizer.exe” into the DARK SOULS REMASTERED folder. 

# Register The Mod As A Non Steam Game

Next we are going to tell Steam to treat DarkSoulsItemRandomizer.exe as a game. Open Steam and click “Add a Game” at the bottom left of the screen. Click “Add a Non-Steam Game”. A popup window will appear. Click Browse.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/f9da4544-88e3-43ef-9e13-6641927d5adf/Untitled.png)

From here navigate to the DARK SOULS REMASTERED folder and select the DarkSoulsItemRandomizer.exe. Do NOT select the version of the mods from your Downloads folder. 

If you do not see the folder you may need to enable “Show Hidden Files”. To do this click the “Options” icon at the top right and click “Show Hidden Files”. Now you can navigate from “home” to your DARK SOULS REMASTERED folder. Select the DarkSoulsItemRandomizer.exe.

Once this is complete return to Steam. There should be a new “game” with the same name as the exe. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/5e1b8eb3-a063-418e-95fa-b3caffa86912/Untitled.png)

## Run the Mod

To run the mod we need to tell Steam to run the mod using “Proton”. To do this right click on the mod in Steam, then click “Properties”. Under “Compatibility” enable the “Force the use of a specific Steam Play compatibility tool”. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/47d48d23-42d2-4e39-8a4c-8142f0c51d34/Untitled.png)

Return to the mod in Steam and click Play. From here you should be able to configure the mod to your liking. See the txt file that came with the mod to get an idea of what all the different settings do. If you ever want to undo the mod the instructions in the txt file should work. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc3b519c-0955-484f-9286-589d3a7a00c3/594f5dde-76ac-4579-b50a-9f5a9b22a1a4/Untitled.png)

From here the mod should have taken effect. Return to the default “Gaming Mode” of the Steam Deck and run Dark Souls Remastered and enjoy your game. You will know the mod works if the characters in the character creator menu is randomized. 

# Uninstalling The Mod

You can follow the same removal instructions from the Nexus mode page. Just go back into “Desktop Mode” and navigate to the Dark Souls folder like before. I have put the instructions from Nexus below and an explanation of what you're doing. 

Removal Instructions:

1. Check that GameParam.parambnd.bak exists in DATA\param\GameParam 
2. Delete GameParam.parambnd from DATA\param\GameParam 
3. Re-name GameParam.parambnd.bak to GameParam.parambnd

Explanation:

GameParam.parambnd is the file that defined the items in dark souls. When you run the randomizer mod it generates a new random version of this file.  

The random version is then used and the default file is saved as a ".bak" as in backup version. 

So to fix everything you're just restoring the backup.
