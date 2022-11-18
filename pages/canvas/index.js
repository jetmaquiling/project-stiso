import FooterV1 from "@/components/footer/footerv1";
import FooterV2 from "@/components/footer/footerv2";
import HeadV2 from "@/components/head/headv2";
import styles from "@/styles/caveat/canvas.module.css";
import exportAsImage from "@/components/exportAsImage";
import { useRef, useState } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ReplyIcon from "@material-ui/icons/Reply";
import Head from "next/head";
export default function Canvas() {
  const exportRef = useRef();
  const [enableOverflow, setOverflow] = useState(true); // for demo purpose
  const [preview, setPreview] = useState("/Images/papaImage.jpg");
  const [page, setPage] = useState(1);
  const [editImage, setEditImage] = useState(false);
  const [horizontal, setHorizontal] = useState(1);
  const [vertical, setVertical] = useState(1);
  const [scale, setScale] = useState(1);

  function onChrome() {
    const url = "https://ernieabella.com/canvas/";
    window.open("googlechrome://navigate?url=" + url, "_system");
  }

  return (
    <div>
      <Head>
        <title>Canvas - Ernie Abella</title>
        <meta
          name="description"
          content="Support the campaign by setting up your profile picture with campaign overlay."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Canvas - Easily Set Up Profile Picture- Ernie Abell BAGONG PILIPINAS"
        />
        <meta property="og:image" content="./Thumbnail/ernieabella.png" />
      </Head>
      <HeadV2 backdrop={true} />
      {/* DO NOT TOUCH */}

      <div className={styles.invinsible}>
        <div ref={exportRef} className={styles.main_canvas_case}>
          <div className={styles.main_canvas}>
            <img
              src={preview}
              style={{
                transform: `scale(${scale}) translate(${horizontal}%, ${vertical}%)`,
              }}
            ></img>
          </div>

          <img className={styles.frame} src="/Images/frame.png"></img>
        </div>
      </div>

      {/* DO NOT TOUCH */}

      {/* STEP 1 Choose Frame */}
      {page === 1 && (
        <div className={styles.container}>
          <h3>Choose a frame:</h3>
          <div className={styles.frame_container}>
            <div className={styles.frame_choice}>
              <div onClick={() => setPage(2)} className={styles.frame_image}>
                <img src="/Images/frame.png"></img>
              </div>
            </div>
            <div className={styles.frame_choice}>
              <div onClick={() => setPage(2)} className={styles.frame_image}>
                <img src="/Images/frame.png"></img>
              </div>
            </div>
            <div className={styles.frame_choice}>
              <div onClick={() => setPage(2)} className={styles.frame_image}>
                <img src="/Images/frame.png"></img>
              </div>
            </div>
            <div className={styles.frame_choice}>
              <div onClick={() => setPage(2)} className={styles.frame_image}>
                <img src="/Images/frame.png"></img>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 FINISHING TOUCHES */}

      {page === 2 && (
        <div className={styles.container}>
          <div className={styles.container_facebook_canvas}>
            <div className={styles.header_facebook_canvas}>
              <div className={styles.profile_canvas_case}>
                <div className={styles.preview_canvas}>
                  <img
                    src={preview}
                    style={{
                      transform: `scale(${scale}) translate(${horizontal}%, ${vertical}%)`,
                    }}
                  />
                </div>

                <img className={styles.frame} src="/Images/frame.png"></img>
              </div>
              <div className={styles.text_facebook_canvas}>
                <p>
                  Ernie Abella <span>updated his profile picture.</span>
                </p>
                <span>October 21, 2020</span>
              </div>
            </div>
            <div className={styles.body_facebook_canvas}>
              <div className={styles.preview_canvas_case}>
                <div className={styles.preview_canvas}>
                  <img
                    src={preview}
                    style={{
                      transform: `scale(${scale}) translate(${horizontal}%, ${vertical}%)`,
                    }}
                  />
                </div>

                <img className={styles.frame} src="/Images/frame.png"></img>
              </div>
              {editImage && (
                <div className={styles.edit_container}>
                  <p>ZoomOut / ZoomIn</p>
                  <input
                    className={styles.scale_input}
                    type="range"
                    min="0"
                    max="2"
                    step=".1"
                    value={scale}
                    onChange={(e) => {
                      setScale(e.target.value);
                    }}
                    id="myRange"
                  />
                  <p>Move Up/Down</p>
                  <input
                    className={styles.vertical_input}
                    type="range"
                    min="-200"
                    max="200"
                    orient="vertical"
                    value={vertical}
                    onChange={(e) => {
                      setVertical(e.target.value);
                    }}
                    id="myRange"
                  />
                  <p>Move Left/Right</p>
                  <input
                    className={styles.horizontal_input}
                    type="range"
                    min="-200"
                    max="200"
                    value={horizontal}
                    onChange={(e) => {
                      setHorizontal(e.target.value);
                    }}
                    id="myRange"
                  />
                </div>
              )}
            </div>
            <div className={styles.footer_facebook_canvas}>
              <div>
                <ThumbUpAltOutlinedIcon style={{ marginRight: "5px" }} /> Like
              </div>
              <div>
                <ChatBubbleOutlineIcon style={{ marginRight: "5px" }} /> Comment
              </div>
              <div>
                <ReplyIcon style={{ marginRight: "5px" }} /> Share
              </div>
            </div>
          </div>
          <div className={styles.button_container}>
            <label className={styles.input_button}>
              {preview === "/Images/papaImage.jpg"
                ? "Upload Image"
                : "Change Image"}
              <input
                accept="image/png, image/jpeg"
                className={styles.button}
                type="file"
                multiple={false}
                onChange={(e) => {
                  const objectUrl = URL.createObjectURL(e.target.files[0]);
                  setPreview(objectUrl);
                  URL.revokeObjectURL(e.target.files[0]);
                }}
              />
            </label>

            {preview !== "/Images/papaImage.jpg" && (
              <button
                onClick={() => setEditImage(true)}
                className={styles.button}
              >
                Edit Image
              </button>
            )}

            {preview !== "/Images/papaImage.jpg" && (
              <button
                className={styles.button}
                onClick={() => exportAsImage(exportRef.current, "test")}
              >
                Download Image
              </button>
            )}
          </div>
        </div>
      )}

      <FooterV1 />
      <FooterV2 />
    </div>
  );
}
