![](https://user-images.githubusercontent.com/30361728/43074460-fc80987c-8e9a-11e8-88fd-78167e212257.png)

# Gitiss
This is a **CLI tool** to report issues on GitHub straight from your terminal. Now how cool is this! I will soon be publishing this as 
an npm package.

## Instructions to install and use

1. download or clone this repo:
```Terminal
git clone https://github.com/himanish-star/gitiss.git
```

2. Then follow the following commands one by one
```Terminal
cd gitiss
sudo link command_file.js
```

3. After **step 2** **gitiss** now becomes a global command.

4. For **gitiss** to do its job your current directory should be the directory of the project for which you wish to 
file an issue.

**Example**:
Let's say I want to file an issue for a project named `xyz`

Then I run:
`cd xyz`

This brings me to the project directory.

**Remember to always stay in this directory while using gitiss because gitiss reads contents
of your `.git` folder which is located in the project directory**

5. Before proceeding please setup the user token. For more info check **point 2** of User Manual given below.

6. Refer to the user manual for how to file an issue.

## User manual
1. Help
 - For any reference to the commands of **gitiss** CLI you can run
 ```Terminal
 gitiss --help
 ```
 
 **Figure:**
 ____________________________________
 
 ![](https://user-images.githubusercontent.com/30361728/43076400-c1ddeb78-8ea1-11e8-828f-5990f456db80.png)
 _______________________
2. Setting up token
 - This process is a one-time process and is never to be repeated again and again. 
 - A github token is an authorization on your 
 behalf.
 - navigate to https://github.com/settings/tokens
 - create a new personal access token
 - copy this token
 - then run the following command to set your personal_access_token:
 ```Terminal
 gitiss token <your_personal_access_token>
 ```
 
 **Figure:**
 __________________________________________
 ![](https://user-images.githubusercontent.com/30361728/43077092-0759efba-8ea4-11e8-97f7-6fde246b712a.png)
 __________________________
3. To file an issue inline in **gitiss**:
 - To file an issue in the origin of the repo:
 ```Terminal
 finline -o "your_inline_title" "your_inline_body"
 ```
 - To file an issue in the upstream of the repo(please set the upstream before doing so):
 ```Terminal
 finline -u "your_inline_title" "your_inline_body"
 ```
 
 **Figure:**
 ______________________________________
 ![](https://user-images.githubusercontent.com/30361728/43076453-eba22e10-8ea1-11e8-8e23-a31c7d391957.png)
 ________________________
 **Figure:**
 ________________________________________
 ![](https://user-images.githubusercontent.com/30361728/43076478-ff506efe-8ea1-11e8-8c35-96200f721138.png)
 ____________________________________
4. To file an issue using the vi/vim editor in **gitiss**:
 - To file an issue in the origin of the repo:
 ```Terminal
 feditor -o 
 ```
 - To file an issue in the upstream of the repo(please set the upstream before doing so):
 ```Terminal
 feditor -u 
 ```
 
 **Figure:**
 _______________________________________
 ![](https://user-images.githubusercontent.com/30361728/43076837-219208aa-8ea3-11e8-91f2-824b111e43b2.png)
 _____________________________________
 **Figure:**
 _______________________________________________________
 ![](https://user-images.githubusercontent.com/30361728/43076852-353d8fe6-8ea3-11e8-93cb-1b633f229c78.png)
 ________________________________
## Report a bug or need help

Please feel free to file an issue on GitHub or mail me directly(shmiitian@gmail.com) for any problems or bugs. I am always ready to help.
I hope this CLI tool makes it easy for you to file issues next time :smiley:
