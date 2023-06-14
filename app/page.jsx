"use client";

import Image from "next/image";
import Link from "next/link";
import CreateModal from "./components/createModal/createModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "./postSlice";
import { deletePost, fetchAllPosts } from "./postApi";

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(selectPost);

  const [modal, setModal] = useState(false);

  // handle delete post
  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  // handle edit post
  const handleEdit = (id) => {};

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <>
      <div className="home">
        <div className="row mx-0">
          {/* Header */}
          <div className="col-md-2 header-top my-0">
            <div className="header">
              {/* logo */}
              <div className="logo">
                <Link href={"/"}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                    width={100}
                    height={50}
                    style={{ color: "#000" }}
                    alt=""
                  />
                </Link>
              </div>
              <CreateModal show={modal} onHide={() => setModal(false)} />
              {/* menu */}
              <div className="menu mt-4">
                <ul className="list-group">
                  <li className="list-group-item my-2">
                    <Link href={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bxs-home"></i>
                      <span>Home</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link href={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-search"></i>
                      <span>Search</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link href={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-time"></i>
                      <span>Explore</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link href={"/"} className="d-flex gap-3">
                      <i
                        style={{ fontSize: "25px" }}
                        class="bx bx-movie-play"
                      ></i>
                      <span>Reels</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link href={"/"} className="d-flex gap-3">
                      <i
                        style={{ fontSize: "25px" }}
                        class="bx bx-message-rounded-dots"
                      ></i>
                      <span>Messages</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link href={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-heart"></i>
                      <span>Notifications</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <button
                      href={"/create"}
                      className="d-flex gap-3"
                      onClick={() => setModal(true)}
                    >
                      <i
                        style={{ fontSize: "25px" }}
                        class="bx bx-plus-circle"
                      ></i>
                      <span>Create</span>
                    </button>
                  </li>

                  <li className="list-group-item my-2 ">
                    <Link href={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-user"></i>
                      {/* <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv3_7feBQf5fP_TSXxW4Nz-NOhsx9JA-_6Q&usqp=CAU"
                        }
                        alt=""
                        height={50}
                        width={50}
                      /> */}
                      <span>Profile</span>
                    </Link>
                  </li>

                  <li className="list-group-item ">
                    <Link href={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-menu"></i>
                      <span>More</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main body */}
          <div className="col-md-7 me-5">
            <div className="main-body">
              {/* story box */}
              <div className="story-box mb-4 ">
                <div className="story-item ">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPICw0MvHj_wo8CMy5anGtsvBzqAJSQtDFw&usqp=CAU"
                    height={50}
                    width={50}
                    alt=""
                  />

                  <span>Anis Ahad</span>
                </div>

                <div className="story-item ">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC-vgBhM-Q-qXkzUpMffAcFzS4UvNZ_d9wg&usqp=CAU"
                    height={50}
                    width={50}
                    alt=""
                  />

                  <span>Sarmin Sultana</span>
                </div>

                <div className="story-item ">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMQU5OOJ8XrMGxRz-tynm0hOLru2aa2H6Vg&usqp=CAU"
                    height={50}
                    width={50}
                    alt=""
                  />

                  <span>AR Sabbir</span>
                </div>

                <div className="story-item ">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4P5FDXigA7NZ1Epe2vRE7CyJfyI4rrKfDg&usqp=CAU"
                    height={50}
                    width={50}
                    alt=""
                  />

                  <span>Raza Miya</span>
                </div>

                <div className="story-item ">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KXEB-S2jZ4g9Ae7U-8CRWzzIFTXGuiiPUg&usqp=CAU"
                    height={50}
                    width={50}
                    alt=""
                  />

                  <span>Golam Rabbani</span>
                </div>

                <div className="story-item ">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxZjAx9guVVi5EmtciN8lppcBwBjFsUUf2A&usqp=CAU"
                    height={50}
                    width={50}
                    alt=""
                  />

                  <span>Jibon Roy</span>
                </div>
              </div>

              {/* user box */}
              <div className="user-box mt-5">
                {posts.map((item, index) => {
                  return (
                    <div className="user-post-box" key={index}>
                      <div className="user-info d-flex justify-content-between">
                        <div className="user-title d-flex gap-3 align-content-center ">
                          <div className="profile-photo ">
                            <Image
                              src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv3_7feBQf5fP_TSXxW4Nz-NOhsx9JA-_6Q&usqp=CAU"
                              }
                              alt=""
                              height={40}
                              width={40}
                            />
                          </div>
                          <div className="user-bio">
                            <span>
                              Sufia Akter
                              <span
                                style={{ fontWeight: "200", color: "#777" }}
                              >
                                • 2d
                              </span>
                            </span>
                            <p>Web Developer</p>
                          </div>
                        </div>

                        <div className="action-bar  text-right">
                          <div class="dropdown my-3">
                            <button class="dropbtn">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </button>
                            <div class="dropdown-content">
                              <Link
                                href=""
                                onClick={() => handleEdit(item._id)}
                              >
                                Edit
                              </Link>
                              <Link
                                href=""
                                onClick={() => handleDelete(item._id)}
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="post">
                        <div className="post-photo">
                          <div className="post-photo-box">
                            <Image
                              src={item.photo}
                              alt=""
                              height={450}
                              width={400}
                              className="w-100"
                            />
                          </div>

                          <div className="reactions-box ">
                            <div className="reactions d-flex gap-2 mt-2 ">
                              <div className="left-bar">
                                <button>
                                  <i class="bx bx-heart"></i>
                                </button>
                                <button>
                                  <i class="bx bx-message-rounded"></i>
                                </button>
                                <button>
                                  <i class="bx bx-paper-plane"></i>
                                </button>
                              </div>
                              <div className="right-bar">
                                <button>
                                  <i class="bx bx-bookmark"></i>
                                </button>
                              </div>
                            </div>
                            <div className="likes mt-2">
                              <p>100 likes</p>
                            </div>
                            <div className="comment-box">
                              <input
                                type="text"
                                placeholder="Add a comment..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="col-md-3 " style={{ width: "34%" }}>
            <div className="right-sidebar">
              <div className="user-info d-flex justify-content-between">
                <div className="user-title d-flex gap-3 align-content-center ">
                  <div className="profile-photo ">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv3_7feBQf5fP_TSXxW4Nz-NOhsx9JA-_6Q&usqp=CAU"
                      }
                      alt=""
                      height={50}
                      width={50}
                    />
                  </div>

                  <div className="user-bio mt-2">
                    <span>sufia_akter22</span>
                    <p>Sufia Akter</p>
                  </div>
                </div>

                <div className="action-bar text-right mt-2">
                  <Link href={""}>switch</Link>
                </div>
              </div>

              <div className="suggestions-box d-flex justify-content-between my-3">
                <p>Suggestions for you</p>
                <Link href={""}>See All</Link>
              </div>

              <div className="follow">
                <div className="user-info d-flex justify-content-between">
                  <div className="user-title d-flex gap-3 align-content-center ">
                    <div className="profile-photo ">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMQU5OOJ8XrMGxRz-tynm0hOLru2aa2H6Vg&usqp=CAU"
                        alt=""
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="user-bio">
                      <span>almahdimuntasir</span>
                      <p>Followed by _asraful_haq_</p>
                    </div>
                  </div>
                  <div className="action-bar text-right">
                    <Link href={""}>Follow</Link>
                  </div>
                </div>

                <div className="user-info d-flex justify-content-between">
                  <div className="user-title d-flex gap-3 align-content-center ">
                    <div className="profile-photo ">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLQoEtOfDFUBw5qWRgRr8jvAWbXDzvUNO3w&usqp=CAU"
                        alt=""
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="user-bio">
                      <span>sushic.nl</span>
                      <p>Followed by programmerrabbani</p>
                    </div>
                  </div>
                  <div className="action-bar text-right">
                    <Link href={""}>Follow</Link>
                  </div>
                </div>

                <div className="user-info d-flex justify-content-between">
                  <div className="user-title d-flex gap-3 align-content-center ">
                    <div className="profile-photo ">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx-N1OkLrWHmQA9ek1e6_ngH3K415kgv_Tw&usqp=CAU"
                        alt=""
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="user-bio">
                      <span>irinafrose10</span>
                      <p>Followed by programmerrabbani</p>
                    </div>
                  </div>
                  <div className="action-bar text-right">
                    <Link href={""}>Follow</Link>
                  </div>
                </div>
              </div>

              <div className="footer mt-3">
                <p>© 2023 Instagram from Meta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
