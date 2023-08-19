print("Welcome to TrollIndustries Console! To verify you are a member, please enter your membership ID.")
idverification = input("Membership ID: ")
lastnameverification = input("Last Name: ")
# membership ids
account1 = ["5NH87RLMQWGZ3","LO"]
account2 = ["BF2MVHASKNFXZ",""]
account3 = ["HRD74PCWB2SBP",""]
account4 = ["67VDEY64YGCHP",""]
# indexes
id = 0
lastname = 1
# verification
if idverification == account1[id] and lastnameverification == account1[lastname] or idverification == account2[id] and lastnameverification ==  account2[lastname] or idverification == account3[id] and lastnameverification == account3[lastname] or idverification == account4[id] and lastnameverification == account4[lastname]:
    import random
    # connection
    servers = ["uscentral","asiapacific","europe"]
    print("Connecting to nearby server...")
    randomindex = random.randint(0,2)
    print("Successfully connected to " + servers[randomindex])
    i = 0
    # command input
    while i < 100:
        cmdinput = input(">")
        # custom redirect
        if cmdinput == "customredirect":
            webinput = input("Enter website path: ")
            import webbrowser
            webbrowser.open(webinput,new=2)
        # app directory
        elif cmdinput == "appdirectory":
            print("App Directory: ")
            print("1. chrome - Google Chrome")
            print("2. roblox - Roblox Player")
            print("3. spotify - Spotify")
            print("4. vscode - Visual Studio Code")
            appselect = input("Select app: ")
            import webbrowser
            if appselect == "chrome":
                webbrowser.open("chrome://", new=2)
            elif appselect == "roblox":
                webbrowser.open("roblox://",new=2)
            elif appselect == "spotify":
                webbrowser.open("spotify://",new=2)
            elif appselect == "vscode":
                webbrowser.open("vscode://",new=2)
            else:
                print("Enter valid application.")
        # website directory
        elif cmdinput == "webdirectory":
            import webbrowser
            webbrowser.open("1. google")
            print("1. google")
            print("2. youtube")
            print("3. twitch")
            print("4. netflix")
            print("5. disney+")
            print("6. chatgpt")
            print("7. cobalt")
            webselect = input("Select website")
            if webselect == "google":
                webbrowser.open("https://google.com/",new=2)
            elif webselect == "youtube":
                webbrowser.open("https://youtube.com/",new=2)
            elif webselect == "twitch":
                webbrowser.open("https://twitch.tv/",new=2)
            elif webselect == "netflix":
                webbrowser.open("https://netflix.com/",new=2)
            elif webselect == "disney+":
                webbrowser.open("https://disneyplus.com",new=2)
            elif webselect == "chatgpt":
                webbrowser.open("https://chat.openai.com/",new=2)
            elif webselect == "cobalt":
                webbrowser.open("https://co.wukko.me/",new=2)
            else:
                print("Enter valid website.")
        elif cmdinput == "htmlwrite":

            htmlname = input("Filename: ")
            # to open/create a new html file in the write mode
            f = open(htmlname + ".html", 'w')
  
            # the html code which will go in the file GFG.html
            html_template = input("Write your HTML code: ")
  
            # writing the code into the file
            f.write(html_template)
  
            # close the file
            f.close()
        else:
            print("Enter a valid command.")

else:
    print("Unrecognized membership ID/Last Name.")