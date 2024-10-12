Here’s a table with basic Linux commands along with examples:

| **Command**                          | **Description**                                                      | **Example**                                                   |
|--------------------------------------|----------------------------------------------------------------------|---------------------------------------------------------------|
| `pwd`                                | Print the current working directory                                  | `pwd` → `/home/user`                                          |
| `ls`                                 | List the contents of a directory                                     | `ls` → `file1.txt  file2.txt  directory/`                     |
| `cd [directory]`                     | Change the current directory                                         | `cd /var/log`                                                 |
| `touch [filename]`                   | Create an empty file                                                 | `touch myfile.txt`                                            |
| `mkdir [directory]`                  | Create a new directory                                               | `mkdir new_folder`                                            |
| `rm [file]`                          | Remove a file                                                        | `rm myfile.txt`                                               |
| `rm -r [directory]`                  | Remove a directory and its contents recursively                      | `rm -r my_folder`                                             |
| `cp [source] [destination]`          | Copy a file from source to destination                               | `cp file1.txt /backup/file1.txt`                              |
| `mv [source] [destination]`          | Move or rename a file or directory                                   | `mv oldname.txt newname.txt`                                  |
| `cat [file]`                         | Display the contents of a file                                       | `cat /etc/hostname`                                           |
| `more [file]`                        | View the contents of a file page by page                             | `more longfile.txt`                                           |
| `less [file]`                        | Similar to `more`, but allows backward navigation                    | `less log.txt`                                                |
| `echo [text]`                        | Display a line of text or variables                                  | `echo "Hello World"`                                          |
| `grep [pattern] [file]`              | Search for a pattern in a file                                       | `grep "error" logfile.txt`                                    |
| `find [directory] -name [filename]`  | Find files by name in a directory                                    | `find /home -name "*.txt"`                                    |
| `chmod [permissions] [file]`         | Change file permissions                                              | `chmod 755 script.sh`                                         |
| `chown [user]:[group] [file]`        | Change file owner and group                                          | `chown user:group myfile.txt`                                 |
| `df -h`                              | Display disk space usage in a human-readable format                  | `df -h` → shows disk usage with human-readable sizes           |
| `du -h [directory]`                  | Show disk usage of a directory in a human-readable format            | `du -h /var/log`                                              |
| `ps`                                 | Display currently running processes                                  | `ps` → shows a list of processes                              |
| `kill [PID]`                         | Terminate a process using its PID                                    | `kill 12345`                                                  |
| `top`                                | Display dynamic real-time view of system processes                   | `top` → shows an interactive system process view              |
| `tar -cvf [archive.tar] [files]`     | Create a tar archive from files                                      | `tar -cvf backup.tar /myfolder/`                              |
| `tar -xvf [archive.tar]`             | Extract files from a tar archive                                     | `tar -xvf backup.tar`                                         |
| `zip [archive.zip] [file]`           | Compress a file into a zip archive                                   | `zip archive.zip file1.txt file2.txt`                         |
| `unzip [archive.zip]`                | Extract files from a zip archive                                     | `unzip archive.zip`                                           |
| `ssh [user]@[host]`                  | Connect to a remote host via SSH                                     | `ssh user@192.168.1.100`                                      |
| `scp [source] [destination]`         | Securely copy files between hosts over a network                     | `scp file.txt user@remote:/path/`                             |
| `sudo [command]`                     | Execute a command with superuser privileges                          | `sudo apt-get update`                                         |
| `apt-get update`                     | Update package lists (Debian/Ubuntu-based systems)                   | `sudo apt-get update`                                         |
| `yum update`                         | Update package lists (Red Hat/CentOS-based systems)                  | `sudo yum update`                                             |
| `history`                            | Show command history                                                 | `history` → displays a list of previously executed commands    |

These examples should give you a practical understanding of how each command works!

1:SUDO stands for "Superuser Do"  The sudo command allows users to run specific commands with superuser privileges, without logging in as the root user.

2: df -h (disk free - human readable)
3:What is the root user in Linux?
	The root user is the superuser in Linux, with full administrative privileges,
	 capable of performing any tasks such as installing software, managing users, or changing system settings
4:What are file permissions in Linux?
	Linux file permissions determine who can read, write, or execute a file. 
	They are set for three groups: the owner (user), the group, and others. Permissions are represented as rwx (read, write, execute).
5: File Type:
	The first character (-) indicates the type of file.
	- means a regular file.
	d would mean a directory.
	l would mean a symbolic lin
6:  Here is a summary table for numeric permissions in Linux:  421=== read wirite execute

| **Number** | **Permission**       | **Symbol**  | **Description**           |
|------------|----------------------|-------------|---------------------------|	
| 0          | No permissions       | `---`       | No read, write, or execute |
| 1          | Execute              | `--x`       | Execute only               |
| 2          | Write                | `-w-`       | Write only                 |.  
| 3          | Write + Execute      | `-wx`       | Write and execute          |
| 4          | Read                 | `r--`       | Read only                  |
| 5          | Read + Execute       | `r-x`       | Read and execute           |.  chmod [numeric_permission] [file]. chmod 777 temp.js  -rwxrwxrwx[file read write execute*3]
| 6          | Read + Write         | `rw-`       | Read and write             |
| 7          | Read + Write + Execute | `rwx`     | Full permissions           |

This table outlines how each number maps to the respective file permissions in Linux.


 tabular summary of the Linux file hierarchy																														

| **Directory** | **Purpose**                                |
|---------------|--------------------------------------------|
| `/`           | Root of the filesystem                     |
| `/bin`        | Essential user commands                    |
| `/boot`       | Boot-related files (kernel)                |
| `/dev`        | Device files                               |
| `/etc`        | Configuration files                        |
| `/home`       | User home directories                      |
| `/lib`        | Essential libraries                        |
| `/media`      | Mount points for removable media           |
| `/mnt`        | Temporary mount points                     |
| `/opt`        | Optional third-party software              |
| `/proc`       | Virtual filesystem for system/process info |
| `/root`       | Root user’s home directory                 |
| `/sbin`       | System binaries for root user              |
| `/srv`        | Service-related data                       |
| `/tmp`        | Temporary files                            |
| `/usr`        | User programs, libraries, and documentation|
| `/var`        | Variable files (logs, cache, spool)        |






