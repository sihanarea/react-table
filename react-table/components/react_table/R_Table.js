import React ,{ Component } from 'react';
import R_tbody from './R_tbody';

export default class R_Table extends Component{
	render() {
		return (
			<table className="table table-bordered">
	            <thead>
	                <tr>
	                    <th>#</th>
	                    <th>Id</th>
	                    <th>平台名称</th>
	                    <th>主机名</th>
	                    <th>操作系统</th>
	                    <th>账户</th>
	                    <th>密码</th>
	                    <th>端口号</th>
	                </tr>                    
	            </thead>
	            <R_tbody {...this.props}/>	            
	        </table>    
		)
	}
}