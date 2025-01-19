# Hexo Blog Backup (Icarus Theme)

This repository contains the core configuration backup of LeyaLmg's Hexo blog with the Icarus theme.

## Acknowledgements
This blog's development was greatly inspired by the works and resources provided by the following authors:

- [Xinyu Liu](https://www.alphalxy.com/): [Icarus 主题自定义](https://www.alphalxy.com/2019/03/customize-icarus/)

- [戴闻濠](https://scutlmg.github.io/): [Hexo-icarus主题黑夜模式以及背景](https://scutlmg.github.io/2021/09/14/Hexo-icarus%E4%B8%BB%E9%A2%98%E9%BB%91%E5%A4%9C%E6%A8%A1%E5%BC%8F%E4%BB%A5%E5%8F%8A%E8%83%8C%E6%99%AF/)

## :warning: License 
This repository is licensed under the GNU Affero General Public License Version 3 (AGPL-3.0).

- The code in this repository is prohibited from being used for commercial purposes.

- Everyone is allowed to view, download, and share the code, but **republishing any articles without the author’s permission is strictly forbidden**.

## Steps to Deploy the Local Blog Project

1. Clone the repository to your local machine:

   ```bash
   $ git clone git@github.com:LeyaLmg/LeyaLmg.github.io-source.git

2. Navigate to the project directory:

   ```bash
   $ cd LeyaLmg.github.io-source

3. Temporarily move the Icarus theme out of `node_modules`:

   ```bash
   $ mv node_modules/hexo-theme-icarus ./

4. Remove `node_modules` and reinstall dependencies:

   ```bash
   $ rm -rf node_modules && npm install --force

5. Move the Icarus theme back into `node_modules`:

   ```bash
   $ rm -rf node_modules/hexo-theme-icarus
   $ mv hexo-theme-icarus node_modules/

6. Clean and generate the blog:

   ```bash
   $ hexo clean
   $ hexo g & hexo s

## :warning: Important Notes
*(This section is written for the author)*

Each time you push to this repository, ensure that any locally modified files not backed up in the repository are not ignored by the `.gitignore` file.
If such files are present, update `.gitignore` to avoid excluding them from future pushes, ensuring a complete restoration of the blog project in new environments.
