import {Input, Modal} from "antd";

export function TodoModal(props) {
	return <Modal title={props.title} open={props.open} onOk={props.onOk}
				  onCancel={props.onCancel} okText="Save" cancelText="Cancel"
				  okButtonProps={{
					  style: {
						  background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
						  border: "none",
						  boxShadow: "0 4px 12px rgba(52, 152, 219, 0.3)"
					  }
				  }}
				  cancelButtonProps={{
					  style: {
						  borderColor: "#3498db",
						  color: "#3498db"
					  }
				  }}
	>
		<Input value={props.value} onChange={props.onChange} size="large"/>
	</Modal>;
}