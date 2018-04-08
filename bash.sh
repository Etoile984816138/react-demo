#!/bin/sh

# 运行脚本
# 1.进入项目目录
# 2. bash ./bash.sh <componentsName> <path>
# componentsName 首字母小写，path 为生成组件位置的相对路径，默认为'./src/components'

param=$2
# 配置目录
if [$param == ''];then  
components='./src/components'
else
components=$param
fi
cd $components

# 创建组件目录、文件
mkdir ${1~}
cd ${1~}
touch ${1~}.js ${1~}.css index.js # 注意！！！ ${~}使用需注意bash版本4.0+

# 写入公共代码

# index.js
echo "import ${1~} from './${1~}';" >> index.js
echo "export default ${1~};" >> index.js

# ${1~}.js
cat >> ${1~}.js <<EOF
import React, { Component } from 'react';
import './${1~}.css';

class ${1~} extends Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {}

    render() {
        return(
            <div></div>
        )
    }
}

export default ${1~};

EOF
