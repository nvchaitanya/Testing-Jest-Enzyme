import React from "react";
import axios from "axios";
import { shallow } from "enzyme";
import GitUserSearch from "./GitUserSearch";

jest.mock("axios");

describe("GitUserSearch Component Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GitUserSearch />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders the component without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("updates name state when input changes", () => {
    const input = wrapper.find('input[name="name"]');
    input.simulate("change", { target: { name: "name", value: "test" } });
    expect(wrapper.state("name")).toEqual("test");
  });

  it("Render the title of the component", () => {
    const title = wrapper.find("h1 i")
    expect(title.text()).toBe("GitHub User Search");
  });

  it("updates isrepo state when select changes", () => {
    const select = wrapper.find("select");
    select.simulate("click", { target: { value: "repo" } });
    expect(wrapper.state("isrepo")).toEqual(true);
  });

  it("fetches user data on componentDidMount", async () => {
    const userData = [
      { id: 1, name: "user1" },
      { id: 2, name: "user2" },
    ];
    axios.get.mockResolvedValueOnce({ data: { items: userData } });
    await wrapper.instance().componentDidMount();
    expect(wrapper.state("userData")).toEqual(userData);
    expect(wrapper.state("isSearchData")).toEqual(true);
    expect(wrapper.state("isLoading")).toEqual(false);
  });

  it('renders SearchTable when isSearchData is true', async () => {
    const userData = [{ id: 1, name: 'user1' }, { id: 2, name: 'user2' }];
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { items: userData } });
    await wrapper.instance().componentDidMount();
    wrapper.update();

    expect(wrapper.state('isSearchData')).toEqual(true);
    expect(wrapper.find('SearchTable').exists()).toEqual(false);
    jest.restoreAllMocks();
  });

  it('renders RepoTable when isRepoData is true', async () => {
    const repoData = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { items: repoData } });
    wrapper.setState({ isRepoData: true });
    wrapper.update();

    expect(wrapper.find('RepoTable').exists()).toEqual(false);
    jest.restoreAllMocks();
  });

    it('resets name and language state on reset call', () => {
    wrapper.setState({ name: 'test', language: 'javascript' });
    wrapper.instance().reset();
    expect(wrapper.state('name')).toEqual('');
    expect(wrapper.state('language')).toEqual('');
  });

    it('renders SearchTable when isSearchData is true', () => {
    wrapper.setState({ isLoading: false, isSearchData: true });
    expect(wrapper.find('SearchTable').exists()).toEqual(false);
  });

  it('renders RepoTable when isRepoData is true', () => {
    wrapper.setState({ isLoading: false, isRepoData: true });
    expect(wrapper.find('RepoTable').exists()).toEqual(true);
  });

  it('renders loading spinner when isLoading is false', () => {
    wrapper.setState({ isLoading: false });
    expect(wrapper.find('.spinner-grow').exists()).toEqual(false);
  });

  it("First name field should be defined on input change", () => {
    const form = wrapper.find("input[name='name']");
    form.props().onChange({
      target: {
        name: "name",
        value: "nvchaitanya",
      },
    });
    expect(wrapper.find("input[name='name']")).toBeDefined();
  });

});
