import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Box, Stack, CardContent, Typography, styled } from "@mui/material";
import { Adjust } from "@mui/icons-material";

const StyledCard = styled(Card)({
  cursor: "pointer",
});

const Orders = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | My Orders</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Orders
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <Box>
                <Stack spacing={2}>
                  <StyledCard sx={{ minWidth: 275 }}>
                    <CardContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box flex={1}>
                        <img
                          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </Box>
                      <Box flex={4}>
                        <Typography variant="h6">
                          CAMPUS OXYFIT PRO Casuals For Men
                        </Typography>
                        <Typography color="textSecondary">
                          Color: Black Size: 9
                        </Typography>
                      </Box>
                      <Box flex={1}>
                        <Typography component="p">₹799</Typography>
                      </Box>
                      <Box flex={3}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <Adjust sx={{ color: "red", height: "15px" }} />
                          <Typography component="p" variant="h6">
                            Delivery expected by Oct 07
                          </Typography>
                        </Box>
                        <Typography component="p" sx={{ marginLeft: "8px" }}>
                          Your order has been placed
                        </Typography>
                      </Box>
                    </CardContent>
                  </StyledCard>
                  <StyledCard sx={{ minWidth: 275 }}>
                    <CardContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box flex={1}>
                        <img
                          src="https://images.pexels.com/photos/39362/the-ball-stadion-football-the-pitch-39362.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                          width={80}
                          height={80}
                        />
                      </Box>
                      <Box flex={4}>
                        <Typography variant="h6">
                          WROGN Men Black Genuine Leather Wallet
                        </Typography>
                        <Typography color="textSecondary">
                          Color: Black Size: 12
                        </Typography>
                      </Box>
                      <Box flex={1}>
                        <Typography component="p">₹799</Typography>
                      </Box>
                      <Box flex={3}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <Adjust sx={{ color: "green", height: "15px" }} />
                          <Typography component="p" variant="h6">
                            Delivered on Sep 16
                          </Typography>
                        </Box>
                        <Typography component="p" sx={{ marginLeft: "8px" }}>
                          Your order has been placed
                        </Typography>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Stack>
              </Box>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Orders.propTypes = {
  location: PropTypes.object,
};

export default Orders;
