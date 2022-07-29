cd packages && \
cd type-definitions && yarn && yarn run build && cd .. && \
cd types && yarn && yarn run build && cd .. && \
cd eth-transactions && yarn && yarn run build && cd .. && \
cd eth-providers && yarn && yarn run build && cd .. && \
cd eth-rpc-adapter && yarn && yarn run build 