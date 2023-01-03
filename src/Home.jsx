import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CodeFilterStock from './stock/codeFilterStock';
import Test from './react/UseRefComp2'
import './Home.css'
const { Header, Content, Footer } = Layout;

const Home = () => {
	return (
		<Layout className="Layout">
			<Header style={{ position: 'sticky', top: 0, zIndex: 1 }}>
				<div
					style={{
						float: 'left',
						width: 120,
						height: 31,
						margin: '16px 24px 16px 0',
						background: 'rgba(255, 255, 255, 0.2)',
					}}
				/>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={new Array(3).fill(null).map((_, index) => ({
						key: String(index + 1),
						label: `nav ${index + 1}`,
					}))}
				/>
			</Header>
			<Content className="site-layout" style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div className='mainContent'>{
					<CodeFilterStock />
				}
				</div>
				<Test />
			</Content>
			<Footer style={{ textAlign: 'center', width: '100%', background: '#001529', color: 'white' }}>© Copyright 2022 _stockFlight. All rights reserved.</Footer>
		</Layout>
	);
};

export default Home;