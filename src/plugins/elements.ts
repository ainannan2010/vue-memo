import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Table,
  TableColumn,
  Switch,
  Pagination,
  Dialog,
  Popconfirm,
  Popover,
  MessageBox
} from 'element-ui'

const element = [
  Button,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Table,
  TableColumn,
  Switch,
  Pagination,
  Dialog,
  Popconfirm,
  Popover
]

element.map(item => Vue.use(item))

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
