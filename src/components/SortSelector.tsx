import { Button, Icon, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average" },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger as={Button}>
        <Text>Order By Relevance</Text>
        <Icon as={BsChevronDown} boxSize={4} />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                onClick={() => onSelectSortOrder(order.value)}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
