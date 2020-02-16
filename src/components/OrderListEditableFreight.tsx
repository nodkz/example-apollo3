import './OrderList.scss';
import { Icon } from 'antd';
import { useState } from 'react';
import { useOrderEditMutation } from './__generated__/OrderEditMutation';

interface Props {
  record: { freight?: number; _id: string };
}

export function OrderListEditableFreight({ record }: Props) {
  const [freight, setFreight] = useState(`${record?.freight || 0}`);
  const [editable, setEditable] = useState(false);
  const toggleEditable = () => {
    setFreight(`${record?.freight || 0}`);
    setEditable(!editable);
  };

  const [save, { loading }] = useOrderEditMutation({
    variables: {
      record: {
        _id: record._id,
        freight: parseFloat(freight),
      },
    },
    onCompleted: () => {
      setEditable(false);
    },
  });

  if (editable) {
    return (
      <div className="tableFreightEdit">
        <input
          className="intInput"
          defaultValue={freight}
          onChange={(e) => setFreight(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') save();
          }}
          disabled={loading}
        />
        {loading ? (
          <Icon type="loading" />
        ) : (
          <>
            <Icon
              type="check-circle"
              theme="twoTone"
              twoToneColor="#52c41a"
              onClick={() => save()}
            ></Icon>
            <Icon
              type="close-circle"
              theme="twoTone"
              twoToneColor="#eb2f96"
              onClick={toggleEditable}
            ></Icon>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="tableFreightCell" onClick={toggleEditable}>
      {record?.freight}
    </div>
  );
}
